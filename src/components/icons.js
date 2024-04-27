const EditIcon = ({ onClick }) => (
        <svg  onClick = {onClick} className="cursor-pointer" width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="40.1636" height="40" rx="8" fill="#A6F7E2"/>
            <path d="M27.8782 15.8334L19.8631 23.7834C19.065 24.5751 16.6957 24.9417 16.1664 24.4167C15.6371 23.8917 15.9984 21.5417 16.7965 20.75L24.82 12.7917C25.0179 12.5776 25.2574 12.4055 25.5242 12.2857C25.791 12.166 26.0795 12.1011 26.3722 12.095C26.665 12.0888 26.956 12.1416 27.2276 12.2501C27.4993 12.3586 27.7459 12.5207 27.9527 12.7263C28.1595 12.932 28.3221 13.1771 28.4307 13.4468C28.5394 13.7165 28.5918 14.0053 28.5849 14.2956C28.5779 14.586 28.5117 14.872 28.3902 15.1363C28.2688 15.4006 28.0946 15.6377 27.8782 15.8334V15.8334Z" stroke="#5F4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.242 13.8334H15.0413C14.15 13.8334 13.2952 14.1846 12.665 14.8097C12.0348 15.4348 11.6807 16.2827 11.6807 17.1667V25.5C11.6807 26.3841 12.0348 27.2319 12.665 27.8571C13.2952 28.4822 14.15 28.8334 15.0413 28.8334H24.2829C26.1397 28.8334 26.8034 27.3334 26.8034 25.5V21.3334" stroke="#5F4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
)


const DeleteIcon = ({ onClick }) => (
    <svg onClick = {onClick} className="cursor-pointer" width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.164062" y="0.5" width="40.1636" height="40" rx="8" fill="#FDB5AA"/>
        <path d="M12.6846 16.3249C17.5696 14.5663 22.9223 14.5663 27.8073 16.3249" stroke="#1E2125" strokeOpacity="0.71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.8936 15.2667C16.8936 14.3826 17.2476 13.5348 17.8779 12.9097C18.5081 12.2846 19.3629 11.9333 20.2542 11.9333C21.1454 11.9333 22.0002 12.2846 22.6305 12.9097C23.2607 13.5348 23.6148 14.3826 23.6148 15.2667" stroke="#1E2125" strokeOpacity="0.71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.2461 21.3334V25.5" stroke="#1E2125" strokeOpacity="0.71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.1274 18.825L25.5644 25.4916C25.4742 26.3925 25.0541 27.2292 24.3837 27.8435C23.7133 28.4578 22.8391 28.807 21.9266 28.825H18.566C17.6535 28.807 16.7793 28.4578 16.1089 27.8435C15.4385 27.2292 15.0184 26.3925 14.9281 25.4916L14.3652 18.825" stroke="#1E2125" strokeOpacity="0.71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export { EditIcon, DeleteIcon }