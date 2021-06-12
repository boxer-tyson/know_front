export const checkout = (geohash, entities, shopid) => fetch('/v1/carts/checkout', {
    come_from: "web",
    geohash,
    entities,
    restaurant_id: shopid,
}, 'POST');