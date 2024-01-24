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
    title: Yup.string().required(),
    cat: Yup.string().required(),
    desc: Yup.string().required(),
    post_img: Yup.string().required()

})