type TProduct = {
    id: number
    image: string
    category: string
    title: string
    fit: string
    price: string
}

const LatestProductsList: TProduct[] = [
    {
        id: 1,
        image: '/images/catalog/latest/1.png',
        category: 'Womenswear',
        title: "Timeless A-line Evening Dress",
        fit: 'Ankle-length',
        price: '109.99'
    },

    {
        id: 2,
        image: '/images/catalog/latest/2.png',
        category: 'Womenswear',
        title: "Floral Bloom Maxi Dress",
        fit: 'Slim Fit',
        price: '54.99'
    },

    {
        id: 3,
        image: '/images/catalog/latest/3.png',
        category: 'Womenswear',
        title: "Elegant Evening Gown",
        fit: 'Flowing skirt',
        price: '89.99'
    },

    {
        id: 4,
        image: '/images/catalog/latest/4.png',
        category: 'Accessories',
        title: "Urban Chic Handbag",
        fit: 'Spacious',
        price: '49.99'
    },

    {
        id: 5,
        image: '/images/catalog/latest/5.png',
        category: 'Accessories',
        title: "Sophisticate Sun Hat",
        fit: 'One size fits all',
        price: '24.99'
    },

    {
        id: 6,
        image: '/images/catalog/latest/6.png',
        category: 'Womenswear',
        title: "Boho Chic Printed Scarf",
        fit: 'Lightweight',
        price: '19.99'
    }
]

const DressList: TProduct[] = [
    {
        id: 1,
        image: '/images/catalog/dress/1.png',
        category: 'Womenswear',
        title: "Timeless A-line Evening Dress",
        fit: 'Ankle-length',
        price: '109.99'
    },

    {
        id: 2,
        image: '/images/catalog/dress/2.png',
        category: 'Womenswear',
        title: "Floral Bloom Maxi Dress",
        fit: 'Slim Fit',
        price: '54.99'
    },

    {
        id: 3,
        image: '/images/catalog/dress/3.png',
        category: 'Womenswear',
        title: "Elegant Evening Gown",
        fit: 'Flowing skirt',
        price: '89.99'
    },
]

const AccessoriesList:TProduct[] = [
    {
        id: 1,
        image: '/images/catalog/accessories/1.png',
        category: 'Accessories',
        title: 'Wide-Brim Bucket Hat',
        fit: 'Any face shape',
        price: '69.99'
    },

    {
        id: 2,
        image: '/images/catalog/accessories/2.png',
        category: 'Accessories',
        title: 'Sophisticate Sun Hat',
        fit: 'One size fits all',
        price: '24.99'
    },

    {
        id: 3,
        image: '/images/catalog/accessories/3.png',
        category: 'Accessories',
        title: 'Timeless Fedora',
        fit: 'Any face shape',
        price: '79.99'
    },
]

const BagsList:TProduct[] = [
    {
        id: 1,
        image: '/images/catalog/bags/1.png',
        category: 'Hand Bag',
        title: 'Bold Backpack',
        fit: 'Roomy interior',
        price: '129.99'
    },

    {
        id: 2,
        image: '/images/catalog/bags/2.png',
        category: 'Hand Bag',
        title: 'Night Out Glam',
        fit: 'Compact size',
        price: '79.99'
    },

    {
        id: 3,
        image: '/images/catalog/bags/3.png',
        category: 'Hand Bag',
        title: 'Urban Chic Handbag',
        fit: 'Spacious',
        price: '49.99'
    },
] 

export { LatestProductsList, DressList, AccessoriesList, BagsList }