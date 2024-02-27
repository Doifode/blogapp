import * as Yup from "yup";

export const registrationVal = Yup.object().shape({
    username: Yup.string().min(4).required(),
    email: Yup.string().email().required(),
    password: Yup.string().required()
})

export const loginVal = Yup.object().shape({
    username: Yup.string().required("Please enter username."),
    password: Yup.string().required("Please enter password.")
})

export const addPost = Yup.object().shape({
    title: Yup.string().required("Please enter title."),
    cat: Yup.string().required("Please select category."),
    desc: Yup.string().required("Pleae write description."),
    post_img: Yup.string().required("Please select image related to blog.")

})


export const categoryArray = ['Food', "Design", "Technology", "Cinema", "Science", "Art", "Home", "MyPosts"]