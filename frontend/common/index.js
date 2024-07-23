const backendDomain = "http://localhost:8080";

const summaryAPI = {
  signUP: {
    url: `${backendDomain}/api/signup`,
    method: "post"
  },
  signIN: {
    url: `${backendDomain}/api/signin`,
    method: "post"
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get"
  },
  logout_user: {
    url: `${backendDomain}/api/userLogout`,
    method: "get"
  },
  get_products: {
    url: `${backendDomain}/api/products`,
    method: "get"
  },
  search_products: {
    url: `${backendDomain}/api/products/search`,
    method: "get"
  },
  create_product: {
    url: `${backendDomain}/api/products`,
    method: "post"
  },
  get_product_by_id: {
    url: `${backendDomain}/api/products`, // L'ID du produit doit être ajouté dynamiquement lors de l'utilisation
    method: "get"
  },
  update_product: {
    url: `${backendDomain}/api/products`, // L'ID du produit doit être ajouté dynamiquement lors de l'utilisation
    method: "put"
  },
  delete_product: {
    url: `${backendDomain}/api/products`, // L'ID du produit doit être ajouté dynamiquement lors de l'utilisation
    method: "delete"
  },
  create_user: {
    url: `${backendDomain}/api/users`,
    method: "post"
  },
  get_users: {
    url: `${backendDomain}/api/users`,
    method: "get"
  },
  get_user_by_id: {
    url: `${backendDomain}/api/users`, // L'ID de l'utilisateur doit être ajouté dynamiquement lors de l'utilisation
    method: "get"
  },
  update_user: {
    url: `${backendDomain}/api/users`, // L'ID de l'utilisateur doit être ajouté dynamiquement lors de l'utilisation
    method: "put"
  },
  delete_user: {
    url: `${backendDomain}/api/users`, // L'ID de l'utilisateur doit être ajouté dynamiquement lors de l'utilisation
    method: "delete"
  },
  create_commande: {
    url: `${backendDomain}/api/commandes`,
    method: "post"
  },
  get_user_commandes: {
    url: `${backendDomain}/api/commandes/user`, // L'ID de l'utilisateur doit être ajouté dynamiquement lors de l'utilisation
    method: "get"
  },
  get_commande_by_id: {
    url: `${backendDomain}/api/commandes`, // L'ID de la commande doit être ajouté dynamiquement lors de l'utilisation
    method: "get"
  },
  update_commande_status: {
    url: `${backendDomain}/api/commandes`, // L'ID de la commande doit être ajouté dynamiquement lors de l'utilisation
    method: "put"
  },
  delete_commande: {
    url: `${backendDomain}/api/commandes`, // L'ID de la commande doit être ajouté dynamiquement lors de l'utilisation
    method: "delete"
  },
};

export default summaryAPI;
