

let userService
let authService
let cartService
let productService
let ticketService



(async () => {

    switch ("mongo") {

        case 'mongo':
            console.log('mongo')
            
            // eslint-disable-next-line no-case-declarations
            const { default: ProductService } = await import('./mongo/productService.js')
            authService = new ProductService()

            

            console.log("servicio de usuarios cargado", userService)
            break;
        case 'files':
            console.log('files')
            break;

        default:
            break
    }
})()

export { userService, authService, cartService,productService , ticketService}