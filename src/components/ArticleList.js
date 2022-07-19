import React from 'react'
import Article from "./Article.js"
function Articlelist({posts}) {
    console.log(posts);
    return (
        <main>
            {posts.map((e)=>
                <Article title={e.title} date={e.date} preview={e.preview}></Article>
            )}
        </main>
    )
}

export default Articlelist