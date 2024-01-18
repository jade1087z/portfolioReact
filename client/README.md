# 리액트 환경에서 제작한 포트폴리오입니다.

# 라이브러리 설치

-   npm i sass
-   npm i gsap

# 제작기간

23.11.30 ~

-   react와 node.js express를 활용해 간단한 댓글 기능을 구현했습니다.
-

-   observer 사용시 에러
    // const fadeIn = {
    // hidden: { opacity: 0 },
    // visible: {
    // opacity: 1,
    // transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    // delay: 0.8,
    // },
    // };
    // const Item = ({ data, fadeIn }) => {
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, marginTop: "20px" });
    // const [shouldAnimate, setShouldAnimate] = useState(false);

        //     useEffect(() => {
        //         if (isInView) {
        //             setShouldAnimate(true);
        //         }
        //     }, [isInView]);
        //     return (
        //         <motion.dl
        //             ref={ref}
        //             initial="hidden"
        //             animate={shouldAnimate ? "visible" : "hidden"}
        //             variants={fadeIn}
        //         >
        //             <motion.dt variants={fadeIn}>{data.title}</motion.dt>
        //             <motion.dd variants={fadeIn}>{data.desc}</motion.dd>
        //         </motion.dl>
        //     );
        // };
