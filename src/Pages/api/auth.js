import axios from "axios";


export default async function handler(req, res) {
    const {username} = req.body;

    if(req.method === "POST"){
        try {
            // res.status(200).json({message: "hello backend"})
            const r = await axios.put(
                "https://api.chatengine.io/users/",
                { username: username, secret: username, first_name: username },
                { headers: { "Private-Key": "83f7a278-c036-40cd-b361-21521dde47bf" } }
              );
              return res.status(r.status).json(r.data);
        } catch (e) {
            return res.status(e.response.status).json(e.response.data);
        }

    }

   
}

