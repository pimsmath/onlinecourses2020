* Allow registration to be in the future but still closed. Currently we test for
  open/closed but if closed we report something like "Registration has already
  closed". In some cases we may not be ready to open registration yet. We should
  make the logic date aware.

  |
