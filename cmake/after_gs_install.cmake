set(PUBLIC_INCLUDES
    ${PUBLIC_INCLUDES}
    ${CMAKE_MOD_ELUNA_ENGINE_DIR}/LuaEngine
    ${CMAKE_MOD_ELUNA_ENGINE_DIR}/lualib
)

target_include_directories(game-interface
  INTERFACE
    ${PUBLIC_INCLUDES})

add_dependencies(game lualib)

target_link_libraries(game
  PUBLIC
    lualib)

if( WIN32 )
  if (MSVC)
    set(MSVC_CONFIGURATION_NAME $(ConfigurationName)/)
  endif()
endif()

install(DIRECTORY "${CMAKE_MOD_ELUNA_ENGINE_DIR}/LuaEngine/extensions" DESTINATION "${CMAKE_INSTALL_PREFIX}/scripts/lua/")
