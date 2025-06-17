#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
export MISE_DATA_DIR="$SCRIPT_DIR/tools"
export MISE_INSTALL_PATH="$MISE_DATA_DIR/mise"
export MISE_INSTALL_HELP=0
export PATH="$MISE_DATA_DIR:$PATH"

function http() {
  if [[ $(command -v curl) ]]; then
    curl --progress-bar "$@"
  elif [[ $(command -v wget) ]]; then
    wget -qO- "$@"
  fi
}

if [[ ! -f "$MISE_INSTALL_PATH" ]]; then
  if [[ $(command -v mise) ]]; then
    echo "Using mise from $(which mise)"
  else
    http https://mise.run | sh
  fi
fi
mise -q install
eval "$(mise -q env)"


# If this script is being executed (not sourced) and has an argument, run it with bun
if [[ "${BASH_SOURCE[0]}" == "${0}" && -n "${1}" ]]; then
    bun "$@"
    exit $?
fi