type Missions = {
	name: string;
	flight: number
}

export type CapsuleType = {
	capsule_serial: string;
	capsule_id: string;
	status: string;
	original_launch: string;
	original_launch_unix: number;
	landings: number;
	type: string;
	details: string;
	reuse_count: number;
	missions: Missions[],
};

export type UpcomingCapsulesType = {
	capsule_serial: string;
	capsule_id: string;
	status: string;
	missions: [];
	landings: number;
	type: string;
	details: string;
	reuse_count: number;
};

export enum CapTypes {
	All = "all",
	DR10 = "Dragon 1.0",
	DR11 = "Dragon 1.1",
	DR20 = "Dragon 2.0",
}

export enum CapStatus {
	All = "all",
	Active = "active",
	Retired = "retired",
	Unknown = "unknown",
}