'use strict';

import express from 'express';
import controller from './video.controller';

var router = express.Router();

router.get('/test', controller.show);

module.exports = router;