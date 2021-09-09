import { Router } from 'express'
import passwordController from '../controllers/passwordController'
import { authentication, authorization } from '../middleware/auth'
const router = Router()

router.use(authentication)
router.get('/', passwordController.myPassword)
router.get('/onepass/:_id', authorization, passwordController.findOnePassword)
router.post('/', passwordController.createPassword)
router.put('/:_id', authorization, passwordController.updatePassword)
router.delete('/:_id', authorization, passwordController.deletePassword)

export default router