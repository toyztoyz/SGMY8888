@echo off
set "NODE_BIN=C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "PNPM=C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd"

if not exist "%NODE_BIN%\node.exe" (
  echo Cannot find bundled Node.js at:
  echo %NODE_BIN%\node.exe
  echo.
  echo Please install Node.js from https://nodejs.org/ or ask Codex to use another runtime.
  exit /b 1
)

if not exist "%PNPM%" (
  echo Cannot find bundled pnpm at:
  echo %PNPM%
  echo.
  echo Please install Node.js from https://nodejs.org/ or ask Codex to use another runtime.
  exit /b 1
)

set "PATH=%NODE_BIN%;%PATH%"
call "%PNPM%" install
