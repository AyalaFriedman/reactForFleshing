export const getUsersList = async () => {
    try {
        debugger
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        return users;
    }
    catch (err) {
        console.error(err);
    }
}