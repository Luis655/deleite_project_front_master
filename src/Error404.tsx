import { defineComponent } from "vue";

const Error404 = defineComponent({
    render() {
        return (
            <>
                <body style="Padding: 10%;">
                    <div class="row">
                        <img src="src/assets/images/error404.jpg" alt="sin imagen" />
                    </div>
                </body>
            </>
        )
    }
})

export default Error404