// 用户类型
export interface User {
  id: number
  username: string
  avatar?: string
}

// 商品类型
export interface Product {
  id: number
  name: string
  price: number
  description?: string
  image: string
  category: string
  stock: number
  status: 'on' | 'off' // on: 上架, off: 下架
  createdAt?: string
  updatedAt?: string
}

// 登录表单类型
export interface LoginForm {
  username: string
  password: string
}

// 商品表单类型
export interface ProductForm {
  name: string
  price: number
  description: string
  image: string
  category: string
  stock: number
  status: 'on' | 'off'
}
