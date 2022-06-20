const Router = require('koa-router')
const Koa = require('koa');
const registeredProducts = require('../models/registeredProductsModel')

const warrantiesRouter = new Router()

warrantiesRouter
    .get('/', (ctx, next) => {
        ctx.body = 'Hello World'
    })

module.exports = warrantiesRouter