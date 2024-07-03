const authHeader = () => {
    const token = localStorage.getItem("token");
    if (token) {
        return { "x-access-token": token};
    }
    return {};
}

export default authHeader;