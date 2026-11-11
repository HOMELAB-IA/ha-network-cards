import { describe, it, expect } from 'vitest';
import {
  getState,
  getFloat,
  isOn,
  formatMbps,
  formatDecimal,
  maskIp,
  formatUptime,
  clampPct,
  merakiStatusColor,
  merakiStatusLabel,
} from '../utils.js';
import type { Hass } from '../types.js';

function makeHass(states: Record<string, { state: string; attrs?: Record<string, unknown> }>): Hass {
  return {
    states: Object.fromEntries(
      Object.entries(states).map(([id, { state, attrs }]) => [
        id,
        { entity_id: id, state, attributes: attrs ?? {} },
      ]),
    ),
    callService: async () => {},
  };
}

describe('getState', () => {
  it('retourne l\'état', () => {
    const hass = makeHass({ 'sensor.a': { state: 'online' } });
    expect(getState(hass, 'sensor.a')).toBe('online');
  });
  it('retourne chaîne vide si absent', () => {
    const hass = makeHass({});
    expect(getState(hass, 'sensor.absent')).toBe('');
  });
});

describe('getFloat', () => {
  it('parse un nombre', () => {
    const hass = makeHass({ 'sensor.v': { state: '938.5' } });
    expect(getFloat(hass, 'sensor.v')).toBeCloseTo(938.5);
  });
  it('retourne 0 pour état invalide', () => {
    const hass = makeHass({ 'sensor.v': { state: 'unavailable' } });
    expect(getFloat(hass, 'sensor.v')).toBe(0);
  });
});

describe('isOn', () => {
  it('vrai si état on', () => {
    const hass = makeHass({ 'binary_sensor.w': { state: 'on' } });
    expect(isOn(hass, 'binary_sensor.w')).toBe(true);
  });
  it('faux si état off', () => {
    const hass = makeHass({ 'binary_sensor.w': { state: 'off' } });
    expect(isOn(hass, 'binary_sensor.w')).toBe(false);
  });
});

describe('formatMbps', () => {
  it('formate avec séparateur de milliers fr', () => {
    expect(formatMbps(1234)).toBe('1 234');
  });
  it('arrondit à l\'entier', () => {
    expect(formatMbps(938.7)).toBe('939');
  });
});

describe('formatDecimal', () => {
  it('utilise la virgule', () => {
    expect(formatDecimal(6.3, 1)).toBe('6,3');
  });
  it('entier avec 0 décimale', () => {
    expect(formatDecimal(6.7, 0)).toBe('7');
  });
});

describe('maskIp', () => {
  it('masque les octets 2 et 3', () => {
    expect(maskIp('86.192.168.12')).toBe('86.xxx.xxx.12');
  });
  it('retourne l\'IP telle quelle si format invalide', () => {
    expect(maskIp('invalid')).toBe('invalid');
  });
});

describe('formatUptime', () => {
  it('affiche jours et heures', () => {
    expect(formatUptime(12 * 86400 + 4 * 3600)).toBe('12 j 04 h');
  });
  it('affiche heures et minutes si moins d\'un jour', () => {
    expect(formatUptime(3 * 3600 + 25 * 60)).toBe('3 h 25 min');
  });
});

describe('clampPct', () => {
  it('calcule le pourcentage', () => {
    expect(clampPct(938, 2000)).toBe(47);
  });
  it('plafonne à 100', () => {
    expect(clampPct(2500, 2000)).toBe(100);
  });
  it('retourne 0 si max = 0', () => {
    expect(clampPct(500, 0)).toBe(0);
  });
});

describe('merakiStatusColor', () => {
  it('vert pour online', () => {
    expect(merakiStatusColor('Online')).toBe('#4ADE9B');
  });
  it('rouge pour offline', () => {
    expect(merakiStatusColor('offline')).toBe('#FF8A8A');
  });
  it('gris pour dormant', () => {
    expect(merakiStatusColor('dormant')).toBe('#9AA4B2');
  });
});

describe('merakiStatusLabel', () => {
  it('Online → Online', () => {
    expect(merakiStatusLabel('Online')).toBe('Online');
  });
  it('alerting → Alerte', () => {
    expect(merakiStatusLabel('alerting')).toBe('Alerte');
  });
  it('offline → Hors ligne', () => {
    expect(merakiStatusLabel('offline')).toBe('Hors ligne');
  });
  it('autre → Dormant', () => {
    expect(merakiStatusLabel('dormant')).toBe('Dormant');
  });
});
