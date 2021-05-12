declare const enum BattleGroundTypeId {
  BATTLEGROUND_TYPE_NONE = 0, // None
  BATTLEGROUND_AV = 1, // Alterac Valley
  BATTLEGROUND_WS = 2, // Warsong Gulch
  BATTLEGROUND_AB = 3, // Arathi Basin
  BATTLEGROUND_NA = 4, // Nagrand Arena
  BATTLEGROUND_BE = 5, // Blade's Edge Arena
  BATTLEGROUND_AA = 6, // All Arenas
  BATTLEGROUND_EY = 7, // Eye of the Storm
  BATTLEGROUND_RL = 8, // Ruins of Lordaernon
  BATTLEGROUND_SA = 9, // Strand of the Ancients
  BATTLEGROUND_DS = 10, // Dalaran Sewers
  BATTLEGROUND_RV = 11, // Ring of Valor
  BATTLEGROUND_IC = 30, // Isle of Conquest
  BATTLEGROUND_RB = 32, // Random Battleground
}

declare const enum SpellEffIndex {
  EFFECT_0 = 0,
  EFFECT_1 = 1,
  EFFECT_2 = 2,
}

declare const enum Team {
  HORDE = 67,
  ALLIANCE = 469,
  // TEAM_STEAMWHEEDLE_CARTEL = 169,                       // not used in code
  // TEAM_ALLIANCE_FORCES     = 891,
  // TEAM_HORDE_FORCES        = 892,
  // TEAM_SANCTUARY           = 936,
  // TEAM_OUTLAND             = 980,
  TEAM_OTHER = 0, // if ReputationListId > 0 && Flags != FACTION_FLAG_TEAM_HEADER
}

declare const enum GroupType {
  GROUPTYPE_NORMAL = 0x00,
  GROUPTYPE_BG = 0x01,
  GROUPTYPE_RAID = 0x02,
  GROUPTYPE_BGRAID = GROUPTYPE_BG | GROUPTYPE_RAID, // mask
  GROUPTYPE_LFG_RESTRICTED = 0x04, // Script_HasLFGRestrictions()
  GROUPTYPE_LFG = 0x08,
  // 0x10, leave/change group?, I saw this flag when leaving group and after leaving BG while in group
  // GROUPTYPE_ONE_PERSON_PARTY   = 0x20, 4.x Script_IsOnePersonParty()
  // GROUPTYPE_EVERYONE_ASSISTANT = 0x40  4.x Script_IsEveryoneAssistant()
}

declare const enum InventoryResult {
  EQUIP_ERR_OK = 0,
  EQUIP_ERR_CANT_EQUIP_LEVEL_I = 1,
  EQUIP_ERR_CANT_EQUIP_SKILL = 2,
  EQUIP_ERR_ITEM_DOESNT_GO_TO_SLOT = 3,
  EQUIP_ERR_BAG_FULL = 4,
  EQUIP_ERR_NONEMPTY_BAG_OVER_OTHER_BAG = 5,
  EQUIP_ERR_CANT_TRADE_EQUIP_BAGS = 6,
  EQUIP_ERR_ONLY_AMMO_CAN_GO_HERE = 7,
  EQUIP_ERR_NO_REQUIRED_PROFICIENCY = 8,
  EQUIP_ERR_NO_EQUIPMENT_SLOT_AVAILABLE = 9,
  EQUIP_ERR_YOU_CAN_NEVER_USE_THAT_ITEM = 10,
  EQUIP_ERR_YOU_CAN_NEVER_USE_THAT_ITEM2 = 11,
  EQUIP_ERR_NO_EQUIPMENT_SLOT_AVAILABLE2 = 12,
  EQUIP_ERR_CANT_EQUIP_WITH_TWOHANDED = 13,
  EQUIP_ERR_CANT_DUAL_WIELD = 14,
  EQUIP_ERR_ITEM_DOESNT_GO_INTO_BAG = 15,
  EQUIP_ERR_ITEM_DOESNT_GO_INTO_BAG2 = 16,
  EQUIP_ERR_CANT_CARRY_MORE_OF_THIS = 17,
  EQUIP_ERR_NO_EQUIPMENT_SLOT_AVAILABLE3 = 18,
  EQUIP_ERR_ITEM_CANT_STACK = 19,
  EQUIP_ERR_ITEM_CANT_BE_EQUIPPED = 20,
  EQUIP_ERR_ITEMS_CANT_BE_SWAPPED = 21,
  EQUIP_ERR_SLOT_IS_EMPTY = 22,
  EQUIP_ERR_ITEM_NOT_FOUND = 23,
  EQUIP_ERR_CANT_DROP_SOULBOUND = 24,
  EQUIP_ERR_OUT_OF_RANGE = 25,
  EQUIP_ERR_TRIED_TO_SPLIT_MORE_THAN_COUNT = 26,
  EQUIP_ERR_COULDNT_SPLIT_ITEMS = 27,
  EQUIP_ERR_MISSING_REAGENT = 28,
  EQUIP_ERR_NOT_ENOUGH_MONEY = 29,
  EQUIP_ERR_NOT_A_BAG = 30,
  EQUIP_ERR_CAN_ONLY_DO_WITH_EMPTY_BAGS = 31,
  EQUIP_ERR_DONT_OWN_THAT_ITEM = 32,
  EQUIP_ERR_CAN_EQUIP_ONLY1_QUIVER = 33,
  EQUIP_ERR_MUST_PURCHASE_THAT_BAG_SLOT = 34,
  EQUIP_ERR_TOO_FAR_AWAY_FROM_BANK = 35,
  EQUIP_ERR_ITEM_LOCKED = 36,
  EQUIP_ERR_YOU_ARE_STUNNED = 37,
  EQUIP_ERR_YOU_ARE_DEAD = 38,
  EQUIP_ERR_CANT_DO_RIGHT_NOW = 39,
  EQUIP_ERR_INT_BAG_ERROR = 40,
  EQUIP_ERR_CAN_EQUIP_ONLY1_BOLT = 41,
  EQUIP_ERR_CAN_EQUIP_ONLY1_AMMOPOUCH = 42,
  EQUIP_ERR_STACKABLE_CANT_BE_WRAPPED = 43,
  EQUIP_ERR_EQUIPPED_CANT_BE_WRAPPED = 44,
  EQUIP_ERR_WRAPPED_CANT_BE_WRAPPED = 45,
  EQUIP_ERR_BOUND_CANT_BE_WRAPPED = 46,
  EQUIP_ERR_UNIQUE_CANT_BE_WRAPPED = 47,
  EQUIP_ERR_BAGS_CANT_BE_WRAPPED = 48,
  EQUIP_ERR_ALREADY_LOOTED = 49,
  EQUIP_ERR_INVENTORY_FULL = 50,
  EQUIP_ERR_BANK_FULL = 51,
  EQUIP_ERR_ITEM_IS_CURRENTLY_SOLD_OUT = 52,
  EQUIP_ERR_BAG_FULL3 = 53,
  EQUIP_ERR_ITEM_NOT_FOUND2 = 54,
  EQUIP_ERR_ITEM_CANT_STACK2 = 55,
  EQUIP_ERR_BAG_FULL4 = 56,
  EQUIP_ERR_ITEM_SOLD_OUT = 57,
  EQUIP_ERR_OBJECT_IS_BUSY = 58,
  EQUIP_ERR_NONE = 59,
  EQUIP_ERR_NOT_IN_COMBAT = 60,
  EQUIP_ERR_NOT_WHILE_DISARMED = 61,
  EQUIP_ERR_BAG_FULL6 = 62,
  EQUIP_ERR_CANT_EQUIP_RANK = 63,
  EQUIP_ERR_CANT_EQUIP_REPUTATION = 64,
  EQUIP_ERR_TOO_MANY_SPECIAL_BAGS = 65,
  EQUIP_ERR_LOOT_CANT_LOOT_THAT_NOW = 66,
  EQUIP_ERR_ITEM_UNIQUE_EQUIPABLE = 67,
  EQUIP_ERR_VENDOR_MISSING_TURNINS = 68,
  EQUIP_ERR_NOT_ENOUGH_HONOR_POINTS = 69,
  EQUIP_ERR_NOT_ENOUGH_ARENA_POINTS = 70,
  EQUIP_ERR_ITEM_MAX_COUNT_SOCKETED = 71,
  EQUIP_ERR_MAIL_BOUND_ITEM = 72,
  EQUIP_ERR_NO_SPLIT_WHILE_PROSPECTING = 73,
  EQUIP_ERR_ITEM_MAX_COUNT_EQUIPPED_SOCKETED = 75,
  EQUIP_ERR_ITEM_UNIQUE_EQUIPPABLE_SOCKETED = 76,
  EQUIP_ERR_TOO_MUCH_GOLD = 77,
  EQUIP_ERR_NOT_DURING_ARENA_MATCH = 78,
  EQUIP_ERR_CANNOT_TRADE_THAT = 79,
  EQUIP_ERR_PERSONAL_ARENA_RATING_TOO_LOW = 80,
  EQUIP_ERR_EVENT_AUTOEQUIP_BIND_CONFIRM = 81,
  EQUIP_ERR_ARTEFACTS_ONLY_FOR_OWN_CHARACTERS = 82,
  // no output                                 = 83,
  EQUIP_ERR_ITEM_MAX_LIMIT_CATEGORY_COUNT_EXCEEDED = 84,
  EQUIP_ERR_ITEM_MAX_LIMIT_CATEGORY_SOCKETED_EXCEEDED = 85,
  EQUIP_ERR_SCALING_STAT_ITEM_LEVEL_EXCEEDED = 86,
  EQUIP_ERR_PURCHASE_LEVEL_TOO_LOW = 87,
  EQUIP_ERR_CANT_EQUIP_NEED_TALENT = 88,
  EQUIP_ERR_ITEM_MAX_LIMIT_CATEGORY_EQUIPPED_EXCEEDED = 89,
}

declare const enum DuelCompleteType {
  DUEL_INTERRUPTED = 0,
  DUEL_WON = 1,
  DUEL_FLED = 2,
}

declare const enum Difficulty {
  REGULAR_DIFFICULTY = 0,

  DUNGEON_DIFFICULTY_NORMAL = 0,
  DUNGEON_DIFFICULTY_HEROIC = 1,
  DUNGEON_DIFFICULTY_EPIC = 2,

  RAID_DIFFICULTY_10MAN_NORMAL = 0,
  RAID_DIFFICULTY_25MAN_NORMAL = 1,
  RAID_DIFFICULTY_10MAN_HEROIC = 2,
  RAID_DIFFICULTY_25MAN_HEROIC = 3,
}

declare const enum WeatherState {
  WEATHER_STATE_FINE = 0,
  WEATHER_STATE_FOG = 1,
  WEATHER_STATE_LIGHT_RAIN = 3,
  WEATHER_STATE_MEDIUM_RAIN = 4,
  WEATHER_STATE_HEAVY_RAIN = 5,
  WEATHER_STATE_LIGHT_SNOW = 6,
  WEATHER_STATE_MEDIUM_SNOW = 7,
  WEATHER_STATE_HEAVY_SNOW = 8,
  WEATHER_STATE_LIGHT_SANDSTORM = 22,
  WEATHER_STATE_MEDIUM_SANDSTORM = 41,
  WEATHER_STATE_HEAVY_SANDSTORM = 42,
  WEATHER_STATE_THUNDERS = 86,
  WEATHER_STATE_BLACKRAIN = 90,
  WEATHER_STATE_BLACKSNOW = 106,
}

declare const enum ShutdownExitCode {
  SHUTDOWN_EXIT_CODE = 0,
  ERROR_EXIT_CODE = 1,
  RESTART_EXIT_CODE = 2,
}

declare const enum ShutdownMask {
  SHUTDOWN_MASK_RESTART = 1,
  SHUTDOWN_MASK_IDLE = 2,
}
