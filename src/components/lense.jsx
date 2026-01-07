import {Box, Typography, Card, CardMedia, CardContent} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const photos = [
  {
    title: "𝐈𝐭'𝐬 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐰𝐡𝐢𝐭𝐞 𝐧𝐨𝐢𝐬𝐞 𝐢𝐧 𝐧𝐚𝐭𝐮𝐫𝐞. 🌊🌳",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481140985_122109370286761990_5567708290273155573_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGJjxJjUlzE87HHzUU4-OLVfV1EIhzpcyR9XUQiHOlzJINaeb46Pn-v4v0T0SO1uhJm8S5j8b_ZNKF2p3dR5VyZ&_nc_ohc=3Vqy8BmMxW8Q7kNvwEKJenb&_nc_oc=AdkkDmyQIBcd7V6npIr9CdQq9aGsDkL4ZH3ONEqGeLBSwYvxHJekjsrTEdD_PiLEC1M&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=bgEf9syxOCfSVj1RMqawDg&oh=00_AfqqcaTB5V9EsyxooMyBNSCFkbeMTymyMcu0TpHsSTm2dA&oe=6963C115",
  },
  {
    title: "𝐘𝐨𝐮𝐧𝐠 𝐚𝐧𝐝 𝐰𝐢𝐥𝐝 𝐚𝐧𝐝 𝐟𝐫𝐞𝐞. 🌾🌱",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/480879554_122109377240761990_8496513233383230471_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHaStBQg7LFGR5M8gNvou4j1B836XTJzHTUHzfpdMnMdPqGYDXhba8gGGa42atgTZHJTa5QXUmtI16GtaFi_0EI&_nc_ohc=yLBgrhNwgRYQ7kNvwHnf3C2&_nc_oc=AdlFwGxl_0_3rqhV0R3KLcYX_LKV6EOfBJQjzd5qrIAlEeyNyz3pTtXjy4Lez5qBCBk&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=CTUgMWTD8h5XA5VDSyMH4Q&oh=00_AfqvOYmGxKIGxor_qGvbRzWO_ibZ0OHCFgk_lEpkogblzA&oe=6963A6A9",
  },
  {
    title: "𝐈𝐧 𝐝𝐚𝐫𝐤𝐧𝐞𝐬𝐬' 𝐠𝐫𝐢𝐩, 𝐚 𝐥𝐢𝐥𝐲'𝐬 𝐬𝐢𝐠𝐡𝐭, 🪷 𝐀 𝐫𝐞𝐦𝐢𝐧𝐝𝐞𝐫: 𝐢𝐧 𝐬𝐡𝐚𝐝𝐨𝐰𝐬, 𝐭𝐡𝐞𝐫𝐞'𝐬 𝐬𝐭𝐢𝐥𝐥 𝐥𝐢𝐠𝐡𝐭!✨",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/480576430_122109535172761990_1489184929015222563_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEPU5w2y4JjC09y_tLUXLN1GFCgswzGkgoYUKCzDMaSChDl5OT5Eq6DLnL3ALThfkifD6KzceCouLfgbbqRxA7v&_nc_ohc=Z3rM0OrKLhUQ7kNvwHtjshm&_nc_oc=AdldsgeUR657SH5ojaHve_HIVhUzpGHuKn49xVJVjdxl0_P4-ozoZ8qSVWPsWFRMawc&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=OMlkYCLmeXfR0iohSwKqdw&oh=00_AfpbdUUJZk6Mff09UUIihk7hsZrwVKV0Tij3eAaEkoy7aw&oe=6963A2BA"
  },
  {
    title: "𝐄𝐯𝐞𝐫𝐲 𝐟𝐥𝐨𝐰𝐞𝐫 𝐢𝐬 𝐚 𝐬𝐨𝐮𝐥 𝐛𝐥𝐨𝐬𝐬𝐨𝐦𝐢𝐧𝐠 𝐢𝐧 𝐧𝐚𝐭𝐮𝐫𝐞. 🌸",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481121278_122109547034761990_5987063974933289147_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMydWSL0DedrA01hDnSbK1fsiScQ7vkCd-yJJxDu-QJ3nYdRGvp_GmxzpKLWs-Uj6n8_muRlsj4HqClzAkiMfR&_nc_ohc=ytYn3wpyg48Q7kNvwHaXJdD&_nc_oc=Admm5mVfaQjf_8tjStYwq1LUyKSxS1IFeWfw7vOKWMo7EofnrPaIvBPylMrrv_AbRVU&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=rjJRtCVYN8857km5aHNt_A&oh=00_Afp-m37nqMz9LS6IEHD9NF3GeQaH0FS1Upi0h1YxhqQMyA&oe=6963C76B"
  },
  {
    title: "𝐁𝐞𝐚𝐮𝐭𝐲 𝐢𝐧 𝐞𝐯𝐞𝐫𝐲 𝐛𝐥𝐨𝐨𝐦. 🌱",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/480613038_122109863312761990_4466827737161308352_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEHfelmrYhzUFDcnhk6YYZlMGHsZXXwM28wYexldfAzb3tQ7AIcHCJm28ikfGI3-Xs0EsubdZb9PSMvNKaUkz4A&_nc_ohc=7p9CBDq3ihkQ7kNvwG2lGt0&_nc_oc=AdkOBrtYaU8-US1y1AxnTmmZrgSJibo8i6TU7PJqNmKam0C3gSlkTzRZhrCPMqxaGh8&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=Nb2aAmyP6aq3o7HK5h2JoA&oh=00_Afp8aAo6V2Vc68-n7CQsDegYbWA9d1W7cu_Ml0xZh4tnUw&oe=6963B6EB"
  },
  {
    title: "𝐍𝐚𝐭𝐮𝐫𝐞'𝐬 𝐨𝐰𝐧 𝐚𝐫𝐭𝐰𝐨𝐫𝐤. 🌿",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/480931871_122109866252761990_5314568739220205268_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEcWJR8T90d_6p5_P0LnEpN61Q-KpYKquXrVD4qlgqq5eSwAoCNNZ4_8DLYUj0uPm_WxqXR468lI1lAQmnUYuvD&_nc_ohc=EY2nPZCEDXUQ7kNvwHZgk3-&_nc_oc=AdlDBmEbet8O2vMW4h36vxsMamjaaGxA8ALAROwV1Psf9XkiF1nP5xQDLZ4t7FZYZ6Y&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=46R-pY9vH93UgW8Zt-znZw&oh=00_AfpJQ3pS9m9a8xo9ttMa8r5lWAHV8T3uWB3q-m_lAoBaCA&oe=6963D4C9"
  },
  {
    title: "𝐖𝐢𝐭𝐧𝐞𝐬𝐬𝐢𝐧𝐠 𝐧𝐚𝐭𝐮𝐫𝐞'𝐬 𝐜𝐨𝐥𝐨𝐫𝐟𝐮𝐥 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧. 🍃🌸",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/480735451_122110147004761990_4947729604135250401_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEv5_dS0l6ni9TKkza533AMKtB_K-cHh_4q0H8r5weH_n7qjwS6I7aCE__aZxioIj0fZsKQ2vtUmSx341RdlGHp&_nc_ohc=9hC8Y5Rzb9AQ7kNvwGt1QH6&_nc_oc=Adnl11In3ELZ6vzc364IKV0yflHwqFzuM4xD2pGHGxyRRrO99Ih0hZaGF2VsykGPmrY&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=xwEg6KTbR6E6EGd5aCAoyw&oh=00_AfqHmokqeeVfB7fbX4WaPZMgjWFzVKc_O1v42rDdie4I2Q&oe=6963A07B"
  },
  {
    title: "𝐒𝐰𝐚𝐲𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐰𝐢𝐥𝐝𝐟𝐥𝐨𝐰𝐞𝐫𝐬, 𝐟𝐞𝐞𝐥𝐢𝐧𝐠 𝐟𝐫𝐞𝐞. 🌾🪻",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481902442_122110453688761990_6442162159755165321_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHnJzYL9egXie3aRGZTU4p31h6n056vIGDWHqfTnq8gYD65LOButMXtbSNM4-xNyYJ0A1FLOzGQ9l7EEy2o5YRt&_nc_ohc=7x87ivfjInIQ7kNvwHq0Cla&_nc_oc=AdkQ1eRn4dC0ahD_v0PYY1N5bYEKk7Y99FjCIRzsqZyXxG7klPzg_7Dz1KieOkCEPNc&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=NmXjaTmIER3Ng9pQPrmdBw&oh=00_AfoS19LLMiB5Rg9sN3UCMoU4pqbdFI5z4XjwINSxr6N_Rg&oe=6963BC91"
  },
  {
    title: "𝐁𝐫𝐢𝐠𝐡𝐭 𝐨𝐫𝐚𝐧𝐠𝐞 𝐟𝐥𝐨𝐰𝐞𝐫𝐬 𝐨𝐟 𝐥𝐚𝐧𝐭𝐚𝐧𝐚 𝐜𝐚𝐦𝐚𝐫𝐚 𝐚𝐦𝐨𝐧𝐠 𝐭𝐡𝐞 𝐫𝐢𝐜𝐡 𝐠𝐫𝐞𝐞𝐧𝐞𝐫𝐲. 🏵️🌿",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481699739_122110461758761990_740720061344789233_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeESyuLivo05cjLHhzpLhBvVA_9YzCjNpRID_1jMKM2lEuJ7E42ueX2ujJkye72pR36VKcr5WFqUFdbwgyO8NlBL&_nc_ohc=2SVlczuxDSwQ7kNvwFZ0UyY&_nc_oc=AdkOY7WE4PROy0l4OUzrR6qfPxeTLzScpOPv8gQjx5JS4pweFQ7CBLBAarlMEuv5cZU&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=fnup7mrqY-v_CDxIcTovRA&oh=00_Afr5l8dSDwFX5cQJs0J_ybqm6GKHqVjHrZxDVeBmElCo_g&oe=6963AB6A"
  },
  {
    title: "𝐀 𝐥𝐢𝐭𝐭𝐥𝐞 𝐟𝐥𝐨𝐰𝐞𝐫 𝐩𝐨𝐰𝐞𝐫. 🌿🥀",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481096263_122110995338761990_696479342900950229_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGavgWrpMM_uzL50BAOLr8T9iRoLsBy4Qb2JGguwHLhBmCn8NgE2cfIBlw_KUG5hZ8i_5T_lkej1jJnH_h4VRCw&_nc_ohc=VxXaH0QYR30Q7kNvwHfmJT9&_nc_oc=AdnfsPkFf8dkCixShwzmgDoOm3j5yKihDgSPFCyQd7557BWPzRjOYap3z4B7saykj8U&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=rBVpL5-HzaS1vivPVkrXxg&oh=00_AfoGGphefLie7r0Y7s7MmXIEJDS7GP2Tirs9jUdWbIGk1A&oe=6963C1CA"
  },
  {
    title: "𝐀 𝐓𝐨𝐮𝐜𝐡 𝐨𝐟 𝐏𝐢𝐧𝐤 𝐢𝐧 𝐆𝐫𝐞𝐞𝐧 𝐏𝐚𝐫𝐚𝐝𝐢𝐬𝐞. 💕🍃",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481229464_122111276738761990_5971817095856474225_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH8vALV_8xu4JPDNMMPj9hYE1vdyzY58MATW93LNjnwwEj8M_nHP2fEdOw2p3DUMiJiGUMERFNUPzotbnci3ZlS&_nc_ohc=nov56PAUu08Q7kNvwHFGV6v&_nc_oc=Adl7hb0O5aeerI6cERC9h5Cbr9m2YYS4mTiZz0EPgXpUcDETRbQcBG4wDX7YI-LjzRY&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=0Q5dviup1zz7vTzAVDqLFw&oh=00_AfqP9ASgVCoJPfEGSan3DOKXI8N2lJnZbNduVydQSi1MwQ&oe=6963A695"
  },
  {
    title: "𝐌𝐞𝐞𝐭 𝐭𝐡𝐞 𝐰𝐨𝐫𝐥𝐝'𝐬 𝐛𝐞𝐬𝐭 𝐫𝐞𝐜𝐲𝐜𝐥𝐞𝐫𝐬! 🐜🍃",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481771883_122112165542761990_2656910468637630721_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGEJ0tfukkc5aRQs1nKBr6T-mQ2LWUwUWT6ZDYtZTBRZB-WM4aB70aMbVQ4kdBqFmERGiU6wo4SmBmNPhmtOECq&_nc_ohc=A1KatFiEUGIQ7kNvwG6q0kf&_nc_oc=AdmsUEKQPuBkW20TbHL7xhAjjssYEgRay7uIcrM9aP2zEwJ0zfoNjBmCFmtXHExeP6Q&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=6JgHaOci5bfU2xce9Ikz-Q&oh=00_AfpLcKEzDkubsL_HsQkGMD4Av8Kj9T08P1dwOIozuC60Gw&oe=6963D047"
  },
  {
    title: "🌿 𝐍𝐚𝐭𝐮𝐫𝐞'𝐬 𝐇𝐢𝐝𝐝𝐞𝐧 𝐁𝐞𝐚𝐮𝐭𝐲! 🌸✨",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/481824438_122112205364761990_3721131435650318289_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHIZuz08K6oJ75a2x-_93YlV2qlO6fzOEdXaqU7p_M4R1hhXAKU3UJavnNKVr7pAmIEu7fbjvUPtRfXb3uNe-A2&_nc_ohc=yKaOtJ94glkQ7kNvwF3ZxA_&_nc_oc=AdkC4SpzB3EFlOFz1yMciZe_5VqRc8REXn6dMGY8Inp6msq17skWlRCdSljRpKfMHxA&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=fpS-Jcpcm3jA9i4zu8L1VQ&oh=00_AfpE_lEXhhfXIsJp_CC0qiNgKCwdgc8inU6o1UaZmJCHug&oe=6963AD7A"
  },
  {
    title: "𝐃𝐞𝐥𝐢𝐜𝐚𝐭𝐞 𝐝𝐫𝐞𝐚𝐦𝐬 𝐢𝐧 𝐛𝐥𝐨𝐨𝐦 ☁️🌼",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/484639538_122116453802761990_8123253180932617686_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHTStIWVtp2YMyiZO40_qVnUScfVvJZcoJRJx9W8llygufl0aWcNCZCucqzRfUvJoV27-Lx3MLep1H21VA-FwYy&_nc_ohc=V4iu027ChSwQ7kNvwHeVlbt&_nc_oc=Adk6P9rf7WnNWQ8WQc9U_s3JXQSg_qDaPtSg08C-jxfQSikmRnZB0UxiUVOqE4OjKh4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=0lZMDloHRSyq1rHguJVIoA&oh=00_Afqs7BFiYeofeHnUSD86WzHiHXFYsZUt5UOE5Y421tHO9w&oe=6963C1F0"
  },
  {
    title: "𝐍𝐚𝐭𝐮𝐫𝐞'𝐬 𝐚𝐫𝐭𝐰𝐨𝐫𝐤 𝐨𝐧 𝐰𝐨𝐨𝐝 🍄🌿✨",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/484558732_122116456106761990_6163152854847494202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGOJuLa85fshdDpZmiPdpm-ANl2L0d11nAA2XYvR3XWcJNjgKPVUUrSY8zM1jb7ZULl6wHu2YVyyw1YL4yx2AlG&_nc_ohc=iekiEu9KM3cQ7kNvwH6QsUA&_nc_oc=Adn8jQLinKkvDtlkxACWf4_0kfqxGp93VKpzykvbvzrVKduPqVp3PDAADxpo2nkhCvI&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=Q-ASbq2G2TGB9fcuPxPjNQ&oh=00_AfoBb0KNXVsS9ZD1pnhLKjZviIpESaAlUD37TcCwtJcHFA&oe=6963C8E3"
  },
  {
    title: "𝐀 𝐦𝐨𝐨𝐝𝐲 𝐞𝐯𝐞𝐧𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐚 𝐭𝐨𝐮𝐜𝐡 𝐨𝐟 𝐧𝐚𝐭𝐮𝐫𝐞'𝐬 𝐡𝐚𝐫𝐦𝐨𝐧𝐲🌌⚡️🐦",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/485097602_122116614062761990_996992846597161576_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHMQkvfIk40m-yMbaoVT9wX_UEgwoP9RtX9QSDCg_1G1fQhiDgjqoxs7cHzs9pF1F0oN45oo9uyGXr4wnB31dEF&_nc_ohc=0wASAcy_dukQ7kNvwEUEmbz&_nc_oc=AdmInbdrLj4aKF1ZNd9gKldAnPdDGZtyUQzHwSs-FqfLSCcPAbhI_1_Cl8Bnmpoj3c8&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=2kFIqPQ9xpWy5_g_yXIBvA&oh=00_AfqU_XxLcQV0xlFyGtOVyMe3-2A0ISfoeLFk7Ps4AheOrA&oe=6963ACC6"
  },
  {
    title: "𝐖𝐡𝐞𝐫𝐞 𝐭𝐡𝐞 𝐫𝐚𝐢𝐥𝐬 𝐦𝐞𝐞𝐭 𝐭𝐡𝐞 𝐣𝐮𝐧𝐠𝐥𝐞🌴🚆✨",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/486168291_122117505518761990_5291889138757635979_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHVeWAHxK6E6FxKUyLDOvWX1nD50itD5gLWcPnSK0PmAp8xc_3OazJiM_5vbaPN9A4hdMnFBHgnppPCVquJ9P_Z&_nc_ohc=_EcuzlsnKyoQ7kNvwG8I_Q7&_nc_oc=AdnQO5Ar9N8c77jiWXsIvNUBTrmFlcG0_gwOUzpdi1YW6dPII1oW7vnV6nL4gnCNyuE&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=hoJtalRXRswfeGNNcEdt1Q&oh=00_AfqOWy_CqoYqO6qkja85_kKuzzgTFNDPlCjfEuHhLpmGLg&oe=6963A8E9"
  },
  {
    title: "𝐓𝐡𝐞 𝐞𝐲𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐟𝐥𝐲 👀🪰",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/487113777_122118738488761990_1869996969826430336_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHhWhfnCQq_Px6Wtw1QJ8LMRuNfY6_kJ-dG419jr-Qn52Akd1R1EkGBG-Tmoek-SQgxQs0yLLnM9AiSylfKdSem&_nc_ohc=aBdAGJ2f9xUQ7kNvwFoN3s3&_nc_oc=AdlKx-ESnCo4r3jUDas8iYYBu6b59eRw1f9cz_HCUrAyv6PiI-ZFlx6pvVxanHYjoH4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=fPcMdfRGK5wr8_VEoFsRlQ&oh=00_AfrOSgK96DHHkw4EzCyBi3ND0k-rkcDHGHAMoewKPMhilQ&oe=6963D2B1"
  },
  {
    title: "𝐁𝐥𝐨𝐨𝐝𝐬𝐮𝐜𝐤𝐞𝐫 𝐚𝐭 𝐰𝐨𝐫𝐤!🩸🦟",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/486701003_122119185872761990_4578246585675290162_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEo31GBsgjtH0RQXgfxAUFTx9Xk-AIJsHrH1eT4Agmweqpn5FLaadR2TYHmB5EreKtm1gdDuphUxYiRwgy6zGAX&_nc_ohc=O2NDUpXk8rkQ7kNvwGU_0tx&_nc_oc=AdnV_lPXvWbgdwL-PdWSALhFKMTYXsqQJ0L35R1CvITxJvztEq3sZiOB4UQhtDjy1bI&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=BElxUbJrNSVnhHz7ZcMl3A&oh=00_AfquIRBHHbFLgHPN7WQra-BL9ySagpn-wjtcrdXPlV9RhQ&oe=6963AE58"
  },
  {
    title: "𝐂𝐨𝐥𝐨𝐫𝐟𝐮𝐥 𝐜𝐫𝐚𝐰𝐥 𝐛𝐮𝐝𝐝𝐲! 🐛✨",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/489565110_122122119434761990_1892596144177384043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGxR3Jd-Eyjk4CJRKDQJqRxkqWSjAZLqr-SpZKMBkuqv_XoVTKMa5QLU_-1kSnwMLU7dqPu533gCNrziG1sZAgF&_nc_ohc=Lxe0rWAyexEQ7kNvwE0OG26&_nc_oc=AdkeI8fFQVkDebv3hwwUs6a_wNxZfzUBzf1a6Bavdp5wu0i634gxPeIWhAlnV_HUpfw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=Un4170vjuuY5h9Gx26ePsQ&oh=00_AfodBk0hCfDtioTeLdpeF3XQwhJ16XtCl6NET6bvHMka2w&oe=6963BC79"
  },
  {
    title: "𝐕𝐢𝐛𝐞𝐬 𝐨𝐟 𝐯𝐢𝐨𝐥𝐞𝐭 𝐚𝐧𝐝 𝐬𝐮𝐧𝐬𝐡𝐢𝐧𝐞 💐☀️",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/490166746_122122740632761990_4370233038934265757_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEx5-Y9BB34uPP1ZlKTZvU_456hA1Uvy3vjnqEDVS_LexUJyrmh5shbD8G0B2p0oSX13rpKuB6IGC7-QhxyiBG1&_nc_ohc=P1-oPC6sTsMQ7kNvwHnXK8x&_nc_oc=AdnnKG2vsRXQTyvLRHarH2JT6JG9_LQaRn-ImN7hHq60NFxw4P33uFpSZONEJdjUsS8&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=acIiRSjxabWySKfyeqnKfg&oh=00_AfrNIbNq47NWGDTdI9otNXji0Y31rMgHUrwCzyGg4T-t-g&oe=6963D25A"
  },
  {
    title: "𝐀 𝐬𝐩𝐥𝐚𝐬𝐡 𝐨𝐟 𝐜𝐨𝐥𝐨𝐫 𝐢𝐧 𝐧𝐚𝐭𝐮𝐫𝐞'𝐬 𝐜𝐚𝐧𝐯𝐚𝐬 🎨🌸",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/490354503_122122856858761990_6918330742194342090_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFOjDnactz-5BR_YgyNdqrKBWXkCYJVNkQFZeQJglU2RBnMlzywjitjhOoCCfB3atScaNw4gUPNYeYwLGdQYTBw&_nc_ohc=M3sm6mwu8MwQ7kNvwGZvI6y&_nc_oc=AdkJge9pv-0rjOiKseVmMe3dWuU4DL0d13GrA4EwF60cfe3ndSYYCKsmobyK4iJQYk4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=GKQlvaucIqkOkCQdbNfvWQ&oh=00_AfopJEyamaeqUb5zLLfQ7X1kzEdaKVQ2hf6LnKSpv1pM4w&oe=6963A5BE"
  },
  {
    title: "𝐅𝐮𝐥𝐥 𝐦𝐨𝐨𝐧 𝐯𝐢𝐛𝐞𝐬 𝐨𝐧𝐥𝐲 🌕🔭",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/490592017_122123092904761990_2643170572857140729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH3fALIrwo81zGJAxg55hcXSDDnnFi6ifxIMOecWLqJ_HUeLh2xRbvLfh4Mz-n0FmbQJ9eHKwljBN7cja_q2S-I&_nc_ohc=DWjF5SmsP4sQ7kNvwFDf7Oe&_nc_oc=AdmVt30ZiqjoUEika3g1VIvHRa8wM5nzSVlN9lewChL2owfIy-e4ekgfiGuGMDy_SIo&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=JAyDkvbKQ2htAlo3cmn7Ew&oh=00_AfrtR4Qkl67fam0pcz-rwIYX_5rRckKBHmFH20FUk-eB4w&oe=6963BCE0"
  },
  {
    title: "𝐀𝐧𝐭𝐞𝐧𝐧𝐚𝐞 𝐨𝐧 𝐩𝐨𝐢𝐧𝐭! 🔍🦗",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/490466163_122123243192761990_5932478522136869632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFejWJEltZAtonDkaJO6wzYd_2naIp5_Wh3_adoinn9aPvAaeBmm6JQFLR6JgaAYsba4V7BzCxX-W9q2Q9udBV4&_nc_ohc=yzs1Xf2BFb0Q7kNvwHOnHvH&_nc_oc=Adk05dcD5p6nFQtpa7z4dNft5PbEmiGwlzBe1kZ3zXSlPMbSm3tFDFfEIvjqkCXpGio&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=p2bRQHWMjnrAjP5_gVB3Hg&oh=00_Afp2SuLXnn3O5NyHUh_WF5xLNY1zs2TKkLTHSsFEdBxz-A&oe=6963B518"
  },
  {
    title: "𝐒𝐚𝐜𝐫𝐞𝐝 𝐛𝐞𝐚𝐮𝐭𝐲 𝐢𝐧 𝐭𝐡𝐞 𝐡𝐞𝐚𝐫𝐭 𝐨𝐟 𝐭𝐡𝐞 𝐟𝐨𝐫𝐞𝐬𝐭 ⛰️⛪",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/492302817_122125472036761990_1935676141789311391_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH3jXOZPiVlvQCNDJPR1rtuSZ3DF5VhB05JncMXlWEHTsiAv8w5rwq3gXBXogfveza8g6nFA6PRcpLfAcP0MaGN&_nc_ohc=Onwp7hRCR8AQ7kNvwGqzpn2&_nc_oc=Adnj9940x0qtROmBtJcxVIPx2ibUTiJ22RsVvCaGSQVSPL0DTxXKBvk9JrKpp6pzqWw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=fp5kNJF5fvU9bJYKPuCUrA&oh=00_AfrQ2EIBPB9bXfXvX4WFfCnfhZ_NwzgxkqvEmrOPa17YAQ&oe=6963A7E7"
  },
  {
    title: "𝐀 𝐰𝐨𝐫𝐥𝐝 𝐛𝐞𝐧𝐞𝐚𝐭𝐡 𝐨𝐮𝐫 𝐟𝐞𝐞𝐭 🌍🍄",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/501464013_122134186076761990_3385434762850533022_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHWg3rmI_wj7L4KF-c9P4y1tookZaqH22K2iiRlqofbYuz5Tp_ncif1vRJcmIHeZ4LXAuK9AZxztuLECkZ2jgpT&_nc_ohc=yp2mTKFOQ7QQ7kNvwEcWQMD&_nc_oc=AdkqFdCY4UESlJOP4vJDyRWtgf2bGqr00n55AyrfaXCsOuWXGiGFwnIs64n_BQXsWIo&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=MHcxw2N0FL-T01EVgbiJJg&oh=00_AfolBxqwB6JkWLf-JN-wnC4bTfNcRyTCjMBNCA3us6VhgQ&oe=6963C852"
  },
  {
    title: "𝐇𝐢𝐝𝐝𝐞𝐧 𝐦𝐚𝐠𝐢𝐜 𝐢𝐧 𝐭𝐡𝐞 𝐰𝐨𝐨𝐝𝐬 🌳🔍",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/510459662_122138799530761990_6990538432926364179_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7lX1RkdyrAXcfmTXV66nEYTHgy7dkzSJhMeDLt2TNIpeYhS4uUzeaOMVKqAEkhpq1Mv638WvF2FaVgT7uBmm4&_nc_ohc=0Hy2WXe5N3cQ7kNvwH_q1Gd&_nc_oc=Adll54mgiD9Xu1mCuwwaxuxHbtGiZ7ozDgVw6B-AfgZHY3_PXtJ37A63P4tY85x1vf4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=uYltoloFtzQd0zqvAdDe-w&oh=00_Afr75dvaRwisSYTERbkMuhriyqC2d4O1td-tgSNb6Q7QRg&oe=6963C039"
  },
  {
    title: "🌴🌊 𝐏𝐚𝐫𝐚𝐝𝐢𝐬𝐞 𝐯𝐢𝐛𝐞𝐬 𝐨𝐧𝐥𝐲 🌞🍃",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/518313911_122141829014761990_1266946261359812119_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAPBL8cnwRwYeINnWtJA2IyBBggZrSK3vIEGCBmtIre0JIioy9ez-1B9TYJxjHQIkZJnbT4xbV0CCPsadWAfI8&_nc_ohc=toMlhBqnWNIQ7kNvwGRvCBL&_nc_oc=AdmZzt_8sKeGDEMyHcxCvLrfSs1cIGdSBAAyZbmeg3Y3uZWNSS3a3kZ-lgY_AcFRbU8&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=GgdgmaPXkUxVPCUb2OHM-g&oh=00_AfqaXNXiO0g7so2ADuZ1tRtD4jTIfIuRLxMg-44dfi5tSA&oe=6963B39D"
  },
  {
    title: "𝐅𝐞𝐞𝐥 𝐭𝐡𝐞 𝐩𝐨𝐰𝐞𝐫 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐞𝐚 💪🌊🌿",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/518240438_122141911316761990_5312055402742965192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAQ5z7LhoTOzy_-ALKwhrRV8mecHn4mSJXyZ5wefiZIm_QbJCx5IlgmiB-CFbuKig9XGytH1jzTqvOSx--CjdF&_nc_ohc=QlXGyfbh70AQ7kNvwHhlTHj&_nc_oc=Adnl6jbOQcizQj7LFDRCojCKEeZWoi4wO6jnEexz17KpgJr3-XUSRWFmahHWXBIYZ9c&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=pk6eQFXujaWzh9IBmm6O3Q&oh=00_AfpQfMQrMZiT_vHhm5nXvW_DojdFKI8qK2Zf9NpxtTGU3Q&oe=6963C077"
  },
  {
    title: "𝐒𝐦𝐚𝐥𝐥 𝐬𝐡𝐞𝐥𝐥, 𝐛𝐢𝐠 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 🐚🛣️🦀",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/518270962_122142048824761990_8162599230842761545_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHq3grXeDj_37OJa-aipu4hMMicQUkfS30wyJxBSR9LfZwozz7oiSZO0KhRJ9r0dlJNC43HeWDVwpCEOEjklXKs&_nc_ohc=7U64ez8fZq0Q7kNvwGksO1l&_nc_oc=Adn6o8y9lpznDVZTwlp7hObc7sb_zex5TxIduI26QX4uL2KwMGUuj5RjGPwt6kXXcSc&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=3mofiW7o5rtWfLfwSMMVsQ&oh=00_AfpAaeWbUUTqGsZmsKW3Tz0pSUzMYERaGAUbhBfr_7p2uQ&oe=6963D654"
  },
  {
    title: "𝐀 𝐬𝐚𝐜𝐫𝐞𝐝 𝐩𝐚𝐭𝐡 𝐨𝐯𝐞𝐫 𝐭𝐡𝐞 𝐰𝐚𝐯𝐞𝐬🚶‍♂️🌊🙏",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/518274032_122142460682761990_439898474351974725_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFY4oP96-cG_lJK8nvxZO-Mcdc-TMOoEURx1z5Mw6gRRM0Wn6CQqeUukiIuxIhfXPHehCMl2Bhza0bxIFg5KoYJ&_nc_ohc=n8bP8HGEUzIQ7kNvwFInc7C&_nc_oc=AdmDh9eivKOYywI6PPLDznu-W5aEZ-oh3z55CduQVynTjxK13BEHlXi4dhIH0F4D_II&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=ExEc944KyzaBUdmVu9cnog&oh=00_AfozmUD3vs5kf5YX-ZTmaTTMYlKVAuV6mI7BjUpSN1bRqA&oe=6963D586"
  },
  {
    title: "🌸 𝐏𝐮𝐫𝐞 𝐟𝐥𝐨𝐫𝐚𝐥 𝐛𝐥𝐢𝐬𝐬! 🍃",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/528738987_122146841780761990_1978755277855087510_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHSb8wo00wnEl_jDusCpaKB6_SKDNONlQDr9IoM042VAJfBAmvGxe05mVCmFuYBBr5im_EBpojX9nK3Ma8aG6tm&_nc_ohc=buj-ed1vTSoQ7kNvwGD45j3&_nc_oc=AdnlNOVdcY5fviJNmuJKHj_HbkklEL1GYmPgABLyu41cT1Txvus6oRDMdPmFb1r9U1A&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=EMHir_K2zrf_5mvqXLA7CA&oh=00_AfoCLE9rOA4R0hfc7hXR5khQC-GoERxPBMplTx-SKZCexg&oe=6963A9A4"
  },
  {
    title: "🌸🐝 𝐋𝐢𝐭𝐭𝐥𝐞 𝐩𝐨𝐥𝐥𝐢𝐧𝐚𝐭𝐨𝐫, 𝐛𝐢𝐠 𝐩𝐮𝐫𝐩𝐨𝐬𝐞 ✨💛",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/544852280_122152002602761990_5412154405805433043_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGG3izgzw-ur-_jI0mhVWsC7O1pd3A7LkLs7Wl3cDsue-iwKRaXWZhbf6-KxhJac1QbyAu5awUnWA5rc5IoYXL&_nc_ohc=I7FyKLJRos8Q7kNvwEr0lrr&_nc_oc=Adk9h0mJGq7mg94lCObbfCu7n0FEjdMi0ANnTNmMefYTbm1pVDa_Er4ibIQt_rnDgRQ&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=Cx8h7FYWW8pToBR7XqIPrg&oh=00_AfpeTItAiQSZs7T7nRmiqM9jmT39KE4Hq5WhJGG4-Yje9Q&oe=6963B1B9"
  },
  {
    title: "🌕✨ 𝐖𝐢𝐭𝐧𝐞𝐬𝐬𝐢𝐧𝐠 𝐭𝐡𝐞 𝐦𝐚𝐠𝐢𝐜 𝐨𝐟 𝐭𝐨𝐝𝐚𝐲'𝐬 𝐥𝐮𝐧𝐚𝐫 𝐞𝐜𝐥𝐢𝐩𝐬𝐞 — 𝐰𝐡𝐞𝐧 𝐭𝐡𝐞 𝐦𝐨𝐨𝐧 𝐰𝐞𝐚𝐫𝐬 𝐄𝐚𝐫𝐭𝐡'𝐬 𝐬𝐡𝐚𝐝𝐨𝐰 𝐥𝐢𝐤𝐞 𝐚 𝐜𝐫𝐨𝐰𝐧. 🌑🌌",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/544729402_122152077644761990_1420022377440689569_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHitZC3QAfJ6CKI45NR8Aigtf86O-maX1y1_zo76ZpfXCe2M0QArHgG0jvXYWqgZYu9j5AS-c80_fB0rmvM7Ang&_nc_ohc=ajaSv11jrZwQ7kNvwGC8dtE&_nc_oc=Adk_tHmk9Mo1bXAPo2IC5-VxPtqbkDWyzz7Ya67gz9yVWsIhJcyT1XQA_VshUKrzA6w&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=4-duZGSruaAkbHHHU7wggA&oh=00_AfppRspoh7g5bPJYGP6wFkKX92n1czNFY3aekgNYLI7e_g&oe=6963D45E"
  },
  {
    title: "🪰✨ 𝐄𝐯𝐞𝐧 𝐭𝐡𝐞 𝐭𝐢𝐧𝐢𝐞𝐬𝐭 𝐰𝐢𝐧𝐠𝐬 𝐬𝐡𝐢𝐧𝐞 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡𝐞 𝐬𝐮𝐧 🌿☀️",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/545902558_122152287266761990_334204356981175547_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHkMbmFmTX1fdKEltNiROfjEmWk2K_trnUSZaTYr-2udSCRlnjZspUKg8Bn_VXPwhAEyGDieKMEhtLzfgtvT5E-&_nc_ohc=jkUowJoHKkQQ7kNvwGR32cR&_nc_oc=AdkiC9sCznyu-5yNc_whWi-wES0SJsgZLFdBK539_ckxNHHeeOKvkVAKuq93kEqR8bI&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=6N9th34ax6ITe-Lb-aPmlA&oh=00_AfpotnD5vzl5XVo5SDQvvso6dIJvflQCGpZTJj_K_5t3sg&oe=6963C1FD"
  },
  {
    title: "🌼✨ 𝐆𝐨𝐥𝐝𝐞𝐧 𝐰𝐡𝐢𝐬𝐩𝐞𝐫𝐬 𝐨𝐟 𝐧𝐚𝐭𝐮𝐫𝐞'𝐬 𝐞𝐥𝐞𝐠𝐚𝐧𝐜𝐞 💛🌿",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/545577749_122152354454761990_8431423827526858555_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE8XcNGC1fDuq0zPV06Euzvq1Zme0knU_WrVmZ7SSdT9SN9mhQAnrIY3GUL5EGu80BI85QCsT_5aXz1CPyZMaOh&_nc_ohc=dR-QWXeNkKUQ7kNvwHQ1MZJ&_nc_oc=AdlaLurbMp9MIGmWZgdHOH38yVzWO-hFXnq29D2-u24xf6BbK2mW_VKCnxMUMjyNh2Q&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=tzAVG9G0OfZ6dO58mO-jdg&oh=00_AfrWiNlgypJUZUj9oE0cyC3oP0rmpU9JJGg9CqTkgNiwLA&oe=6963C0B8"
  },
  {
    title: "𝐋𝐢𝐭𝐭𝐥𝐞 𝐰𝐨𝐧𝐝𝐞𝐫 𝐨𝐟 𝐭𝐡𝐞 𝐰𝐢𝐥𝐝 🌾🍄",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/571436133_122158906442761990_9198964434223986658_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFHK0c31qf8HRABIXrEvsqCbWCPXomxocttYI9eibGhy0X53QSOMw_nr7NkB0CteFFIE-0a59NO2VuWhFZKyjkJ&_nc_ohc=doSNVkuySZQQ7kNvwG9tTgk&_nc_oc=AdnQJQuvFYvDXxTEn6q5aJ_omWFUDtDAAEPS-_PyK0XXxukCwB3raB3vak6aqLY3rFo&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=BgUJOLh7RMiJPKyVxUXPjw&oh=00_AfrZPV53m6Hd4bqOBiW2Br4OTxY3rkqs4oLTINgL8AaGeQ&oe=6963C782"
  },
  {
    title: "💫 𝐋𝐢𝐠𝐡𝐭 𝐛𝐮𝐫𝐬𝐭𝐢𝐧𝐠 𝐢𝐧 𝐭𝐡𝐞 𝐝𝐚𝐫𝐤 🌑🔥",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/552415150_122154431918761990_1540640470195636037_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHQV5GoGSOVPihXqfSvQ3ATUS55zr7zYjxRLnnOvvNiPHAKacbFu0q-qtzzx1vDglgN1QbOFfQU6PJcxZyL00Hh&_nc_ohc=2iFGZfI8pBgQ7kNvwEoEMUe&_nc_oc=AdlTvk7L6NBC6bho-zAsxTIney8EhGx6LJii-NBzX3AM9LsYDpFIyMq6uyW0XljaRsY&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=vMQRo7jGxezr59Yaz-F-pA&oh=00_AfqngGXJBTv5e7NzqlrU118nntfGbbu5tcxsQs4EI3EN9g&oe=6963C7D7"
  },
  {
    title: "✨ 𝐈𝐧𝐝𝐞𝐩𝐞𝐧𝐝𝐞𝐧𝐜𝐞 𝐒𝐪𝐮𝐚𝐫𝐞 𝐕𝐢𝐛𝐞𝐬 🌿",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/558741488_122155729136761990_4982319277493982632_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFi-Oo8UQeokDNPhatNl8s9cftSwbZbD3Vx-1LBtlsPdVNEywn-izwUGIE-nou6SzpQWLZp3jkiDb7rOFMX257J&_nc_ohc=I9hs9r3VLmgQ7kNvwGoFGYq&_nc_oc=AdkkN6btbevtctrtoznv64QPpgMcydQfoLhZxqqMuewjdVpi6kXjWJhsfmhKb2eZpiw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=IsXT0G0fL5DWzzWOcrHQ9w&oh=00_AfrJyupoDUvVOVc7vsaNfItwWhe6dy_nIMyFzNjWIvE0sQ&oe=6963B2E1"
  },
  {
    title: "🌿 𝐏𝐞𝐚𝐜𝐞𝐟𝐮𝐥 𝐁𝐮𝐝𝐝𝐡𝐚 𝐒𝐭𝐚𝐭𝐮𝐞 🌼",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/559741333_122155811588761990_2372921770270546043_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEvUT5AxW2n9P7SPDgG7IV1gZA2d7WW6ZiBkDZ3tZbpmNTjoZwTm8StXlWVOlJt7Qby1z54H9jDRNulF0DS9Oo9&_nc_ohc=MdxnVxT_weIQ7kNvwEBB0cM&_nc_oc=AdlavKspSaoerNcGxt5QquipSjcxRY14DzYXBpqLdSJzfQFPf6XsPQs2Uzr2-NUWNWU&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=1-UBzdJ1eNgsFSi6Ks6guA&oh=00_AfrGBnD7oIzKr7N4xHagjvfPrO8tN73LMf-aOT2HgRx6hg&oe=6963AF34"
  },
  {
    title: "🌿🦗 𝐍𝐚𝐭𝐮𝐫𝐞'𝐬 𝐥𝐢𝐭𝐭𝐥𝐞 𝐣𝐮𝐦𝐩𝐞𝐫 ✨",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/565273633_122158419680761990_4859782091691846512_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOiUXIWJFOfj98lL78Zsu8Upnwsyj5Cw1SmfCzKPkLDWPOZdnvqCWig7AvH8S3a-DKOEQ_ar5Ko1viC4Fdk1sq&_nc_ohc=P_vmvFQhdJwQ7kNvwFBYKoB&_nc_oc=AdlYHed2Qh3yVRzoX5nfT9nSbBFiP3a0D5_iBC1Wu6FasN8rc8LtWNM7eu69bp0btg0&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=FH2QazmLnZvvM9A0Gq_5Hg&oh=00_Afpk38XfSUfDgHuhR0xdcvHdnA3Ra6ZHBv8K-Av4YFbNXw&oe=6963A816"
  },
  {
    title: "🌸✨ 𝐍𝐚𝐭𝐮𝐫𝐞'𝐬 𝐠𝐞𝐧𝐭𝐥𝐞 𝐭𝐨𝐮𝐜𝐡 💫",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/567696009_122158670228761990_5639976842777181991_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFHyCNyacZAMIWFzECOAbKuA0vLIke6JN0DS8siR7ok3fH-CId0gBDmum9CFYcTPZd0_Y_JWTqsbb9FnVk5U7FI&_nc_ohc=clRPxJG_4m8Q7kNvwHXS0Va&_nc_oc=AdlQLk2CXEGIEeQrY2Xvp-uD-vQcWy5-hKTPYvxD_4aaA53kAqPAWYVP_Hv9Jl77ALA&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=L2-o4j_1QH5LhnQTKO6Q7g&oh=00_Afo6H-Z3iE3T_Kk_RHUqBPGp123KAOTBzwy2mhURsKgS9Q&oe=6963D2D8"
  },
  {
    title: "✨ 𝐅𝐨𝐫𝐞𝐬𝐭 𝐠𝐞𝐦𝐬 𝐠𝐥𝐨𝐰𝐢𝐧𝐠 𝐢𝐧 𝐭𝐡𝐞 𝐰𝐢𝐥𝐝 🍄🌿",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/576305250_122160682724761990_371511397966480593_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEsjlIIonnZ6SaFWXaZ21Wap4f55vqGiySnh_nm-oaLJEQdsbj7NTdwIDA8ycO-LmWnkjU6kEyqFXArjyCOx3g3&_nc_ohc=Y-qNSyZ5BW4Q7kNvwG-SNQe&_nc_oc=AdncgageKKLuljdV0G77V7Mo7J73tpxYhALjCjfCLePc0adUeQPZ2Eu7RHc4GoWNP_Q&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=HOo5tOqHST9wkZw4qqvUEQ&oh=00_AfotWr10X6e6YK_iyzglShe4MUGYIQX3AstWkoZ6Q3VtNg&oe=6963D459"
  },
  {
    title: "𝐒𝐨𝐟𝐭 𝐛𝐞𝐚𝐮𝐭𝐲, 𝐬𝐡𝐚𝐫𝐩 𝐝𝐞𝐭𝐚𝐢𝐥𝐬 💕📸",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/583896759_122162116472761990_5762593483274670990_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHHa-2syTAAsQV3k_Zz-sz5FP2Nrd6lWUIU_Y2t3qVZQnvF1kE5nwq9Q5Qq9jgoYlh_bC9OA6yYBPsJHVj4XZd0&_nc_ohc=QGyZn8Tzxo4Q7kNvwGnbcCH&_nc_oc=AdlmEY2lVbDe95ig1I5A_LoWUQ36T_opzWAolXBISnvwOKk3H80vHqroYOMcH-c9i7U&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=MvZCLv4V8Vt_07V3YtseyA&oh=00_AfreF4yxvxxNblnSlUOXnai2ZAYE3C8KynXL8jVk5CfJ4g&oe=6963D761"
  },
  {
    title: "𝐀 𝐩𝐨𝐩 𝐨𝐟 𝐩𝐮𝐫𝐩𝐥𝐞 𝐢𝐧 𝐠𝐫𝐞𝐞𝐧 💜🍃",
    image: "https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/597430512_122165987204761990_6616352166841046304_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMGsYxMIWzM4NDigcG8_7yz2ts1875T7XPa2zXzvlPtbHJgfZ6eqakknM4BJXQw59nz785NDlEllh08IOXRU4G&_nc_ohc=rxQGP1dqpbcQ7kNvwF8_pva&_nc_oc=AdmkugwZJ4R6aGzbswV9jZEJJDqEchH9pVn2DoOfnzvt-1mjF65s3GCGiNXqxK4Sgx4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=6OettuDxDb-ag5xVxYbvMA&oh=00_AfpHSOhssmie1tY7OOiShpbTCz18XxXkFaLjtjZKkQne3Q&oe=6963AEF2"
  },
];

export default function Lense(){
    const containerRef = useRef(null);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const speed = 0.5;
        let rafId;

        const autoScroll = () => {
            if (!pause) {
                container.scrollLeft += speed;
            }
            rafId = requestAnimationFrame(autoScroll);
            };

            autoScroll();
            return () => cancelAnimationFrame(rafId);
        }, [pause]);

    return(
        <Box>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mt={6} mb={3}>
                Nature Gallery
            </Typography>

            <Box
                ref={containerRef}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                onTouchStart={() => setPause(true)}
                onTouchEnd={() => setPause(false)}
                sx={{
                    width: {xs:310, sm: 750, md:"auto"},
                    display: "flex",
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    scrollSnapType: "x mandatory",
                    py: 2,
                    "&::-webkit-scrollbar": { display: "none" }
                }}
                >
                {photos.map((photo, index) => (
                    <Card
                        key={index}
                        sx={{
                            flex: "0 0 auto",
                            minWidth: {xs:290, sm:300 ,md:300},
                            maxWidth: {xs:290, sm:300 ,md:300},
                            mx: 1.5,
                            borderRadius: 3,
                            background: "rgba(0, 5, 49, 0.6)",
                            color: "#fff",
                            boxShadow: "0 5px 5px rgba(0,0,0,0.4)",
                            display: "flex",
                            flexDirection: "column",
                            height: 500, 
                        }}
                        >
                        <CardMedia
                            component="img"
                            height="400"
                            image={photo.image}
                            alt={photo.title}
                        />

                        <CardContent
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column"
                                }}>
                            <Typography> {photo.title} </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}