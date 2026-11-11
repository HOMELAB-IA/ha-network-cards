export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

export interface Hass {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

export interface WanCardConfig {
  type: string;
  wan_status: string;
  speed_down: string;
  speed_up: string;
  latency: string;
  jitter: string;
  isp: string;
  ip_public: string;
  gpon_rx?: string;
  gpon_tx?: string;
  optical_rx?: string;
  optical_tx?: string;
  uptime?: string;
  dhcp_leases?: string;
  dhcp_guest?: string;
  restart_button?: string;
  cloudflared_version?: string;
  cloudflared_running?: string;
  speedtest_trigger?: string;
}

export interface MerakiDevice {
  entity: string;
  name: string;
  type: 'switch' | 'access_point';
}

export interface LanMerakiCardConfig {
  type: string;
  devices: MerakiDevice[];
  dashboard_url?: string;
}

export interface Mx64DualWanCardConfig {
  type: string;
  wan1_status?: string;
  wan2_status?: string;
}
