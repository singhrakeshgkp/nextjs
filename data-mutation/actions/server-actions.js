"use server"
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createPost(prevState,formData){
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
    let imageUrl;
    try{
     imageUrl = await uploadImage(image)
    }catch(error){
        throw error;
    }
    console.log(title,image,content)
    await storePost({
      imageUrl: imageUrl,
      title,
      content,
      userId: 1
    });
    redirect('/feed')
  }


export async function togglePostLikeStatus(postId){
    console.log('like fun called for post id ', postId)
    updatePostLikeStatus(postId,2); //hardcoded user id 2 as we want to demonstrate only, in real application this id will be picked from loged in customer profile
    revalidatePath('/feed');
} 