// AuthService.js
class AuthService {
    login(role) {
        localStorage.setItem("user", JSON.stringify({ role }));
    }

    logout() {
        localStorage.removeItem("user");
    }

    getUser() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

    isAuthenticated() {
        return !!this.getUser();
    }

    hasRole(roleRequired) {
        const user = this.getUser();
        return user && user.role === roleRequired;
    }
}

export default new AuthService();
