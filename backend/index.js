import app from './src/app.js'

const PORT = process.env.PORT || 3000

try {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
})
} catch (error) {
    console.log(error);
}
