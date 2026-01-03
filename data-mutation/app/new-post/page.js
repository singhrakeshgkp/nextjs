import createPost from "@/actions/server-actions";
import PostForm from "@/components/post-form";
export default function NewPostPage() {

  /* async function createPost(prevState,formData){// without prevState we will get error "formData.get('abc') is not a function"  as we no longer will get formdata as first argument
    "use server" // this is if we are creating a server action
    const title = formData.get('title')
    const image = formData.get('image');
    const content = formData.get('content')
    let errors = [];

    if(!title && title.trim().length ==0){
      errors.push('title is required')
    }
    if(!content && content.trim().length ==0){
      errors.push('content is required')
    }

    if (errors.length > 0){
       console.log('error content required----------')
      return {errors}
    }
    console.log(title,image,content)
    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    });
    redirect('/feed')
  } */
  return <PostForm action={createPost}></PostForm>
}
