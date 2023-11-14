import express from 'express';
import { validateBody } from '../../middlewares/validateBody.js';
import { authenticate } from '../../middlewares/authenticate.js';
import { schemas } from '../../models/user.js';
import ctrl from '../../controllers/auth.js';

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/',
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

export default router;
