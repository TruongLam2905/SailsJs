/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Joi = require('joi');
const UntilService = require('../services/UntilService');
const {use} = require('bcrypt/promises');
const JWTService = require('../services/JWTService');
module.exports = {


  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
      });
      const {email,password} = schema.validate(req.allParams()).value;
      const encryptedPassword = await UntilService.hashPassword(password);
      const user = await User.create({
        email,
        password: encryptedPassword
      }).fetch();
      return res.ok(user);
    } catch (e) {
      if(e.name === 'ValidationError') {
        return res.badRequest(e);
      }
      return res.serverError(e);
    }
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
      });
      const {email,password} = schema.validate(req.allParams()).value;
      const user = await User.findOne({email});
      if(!user) {
        return res.notFound({err: 'user does not exist'});
      }
      const matchPassword = await UntilService.comparePassword(password, user.password);
      if(!matchPassword) {
        return res.badRequest({err: 'Unauthorize'});
      }
      const token = JWTService.issuer({user: user.id},'1 day');
      return res.ok({token});
    } catch (e) {
      if(e.name === 'ValidationError') {
        return res.badRequest(e);
      }
      return res.serverError(e);
    }
  }

};

