add_subdirectory(${CMAKE_MOD_ELUNA_ENGINE_DIR}/lualib)

add_definitions(-DELUNA)
add_definitions(-DAZEROTHCORE)
add_definitions(-DWOTLK)

CU_ADD_HOOK(BEFORE_GAME_LIBRARY "${CMAKE_CURRENT_LIST_DIR}/before_gs_install.cmake")
CU_ADD_HOOK(AFTER_GAME_LIBRARY "${CMAKE_CURRENT_LIST_DIR}/after_gs_install.cmake")

AC_ADD_CONFIG_FILE("${CMAKE_MOD_ROOT_DIR}/conf/mod_LuaEngine.conf.dist")

message("** [Eluna Module] LuaEngine is enabled!")
