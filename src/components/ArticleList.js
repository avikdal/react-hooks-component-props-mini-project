import React from "react";
import Article from "./Article"

function ArticleList({ articles }){
    console.log("this is articleList props", articles)
    const post = articles.map((article) => {
        return <Article key={article.id} date={article.date} preview={article.preview} title={article.title} minutes={article.minutes} />
    })
    return(
        <main>
            {post}
        </main>
    )
}

export default ArticleList