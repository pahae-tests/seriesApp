export default async function handler(req, res) {
    return res.status(200).json({
        users: ["user1", "user2", "user3"]
    })
}