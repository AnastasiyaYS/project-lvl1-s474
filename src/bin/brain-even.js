#!/usr/bin/env node

import { welcome, hello } from '..';
import { description, game } from '../games/even';

welcome();
description();

const name = hello();
game(name);
