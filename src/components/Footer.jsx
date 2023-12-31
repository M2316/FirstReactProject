import React from 'react'


const footerText = [
  {
      title: "youtube",
      desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
      link: "https://www.youtube.com/@Webstoryboy",
  },
  {
      title: "github",
      desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
      link: "https://github.com/webstoryboy",
  },
  {
      title: "blog",
      desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
      link: "https://webstoryboy.co.kr",
  },
  {
      title: "gsap",
      desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
      link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
  },
  {
      title: "react",
      desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
      link: "https://github.com/webstoryboy/port2023-react",
  },
  {
      title: "vue",
      desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
      link: "https://github.com/webstoryboy/port2023-vue",
  },
  {
      title: "next",
      desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
      link: "https://github.com/webstoryboy/port2023-next",
  },
];

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
        <div class="footer__inner">
            <h2 class="footer__text">
                <div>Jungsoo Park</div>
                <div>@webs</div>
            </h2>
            <div class="footer__info">
                <div class="left">
                    <div class="title">
                        <a href="#">sign up</a>
                    </div>
                    <p class="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <div class="right">
                    <h3>social</h3>
                    <ul>
                      {footerText.map((item)=>
                        <li>
                          <a href={item.link}>{item.title}</a>
                          <em>{item.desc}</em>
                        </li>
                      )}
                        
                        
                    </ul>
                </div>
            </div>
            <div class="footer__right">
                &copy; 2023 M2316<br />
                이 사이트는 리엑트를 이용하여 제작하였습니다.
            </div>
        </div>
    </footer>
  )
}

export default Footer