import type { Hass } from './types.js';

export function getState(hass: Hass, entityId: string): string {
  return hass.states[entityId]?.state ?? '';
}

export function getAttr(hass: Hass, entityId: string, attr: string): unknown {
  return hass.states[entityId]?.attributes[attr];
}

export function getFloat(hass: Hass, entityId: string): number {
  const val = parseFloat(getState(hass, entityId));
  return isNaN(val) ? 0 : val;
}

export function isOn(hass: Hass, entityId: string): boolean {
  return getState(hass, entityId) === 'on';
}

export function formatMbps(val: number): string {
  return Math.round(val).toLocaleString('fr-FR');
}

export function formatDecimal(val: number, decimals = 1): string {
  return val.toFixed(decimals).replace('.', ',');
}

export function maskIp(ip: string): string {
  const p = ip.split('.');
  if (p.length !== 4) return ip;
  return `${p[0]}.xxx.xxx.${p[3]}`;
}

export function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  if (days > 0) return `${days} j ${String(hours).padStart(2, '0')} h`;
  const mins = Math.floor((seconds % 3600) / 60);
  return `${hours} h ${String(mins).padStart(2, '0')} min`;
}

export function clampPct(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((value / max) * 100)));
}

export function merakiStatusColor(state: string): string {
  switch (state.toLowerCase()) {
    case 'online':
      return '#4ADE9B';
    case 'alerting':
      return '#FBBF24';
    case 'offline':
      return '#FF8A8A';
    default:
      return '#9AA4B2';
  }
}

export function merakiStatusLabel(state: string): string {
  switch (state.toLowerCase()) {
    case 'online':
      return 'Online';
    case 'alerting':
      return 'Alerte';
    case 'offline':
      return 'Hors ligne';
    default:
      return 'Dormant';
  }
}
