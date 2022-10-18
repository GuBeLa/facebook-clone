exports.home = (req, res) => {
    res.status(204).json({
        message: "test message",
        error: "error message"
    })
};