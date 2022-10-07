import { Post as PostInterface } from "./home"

interface Props{
    post: PostInterface;
}

export const PostComp = (props: Props) => {
    const { post } = props;

    
    return (
        <div>
            <div className="title">
                <h2>{post.title}</h2>
            </div>
            <div className="body">
                <h2>{post.description}</h2>
            </div>
            <div className="footer">
                <h2>@{post.username}</h2>
            </div>
        </div>
    )
}