import Product from "./Product";
import "./product.css";
import ThemeBtn from "./ToggleTheme/ThemeBtn";

function ProductList() {
  return (
    <>
      <div className="top-text">
        <h2>Release year: 2023</h2>
        <h3>
          In this reality competition show inspired by "Squid Game," 456 players
          put their skills to the ultimate test for a <br /> life-changing $4.56
          million prize.
        </h3>
      </div>
      <div className="product-wrapper">
        <Product
          title="1. Red Light, Green Light"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbd3WBLB6Z8NeteZKY2n7GVkbNhIPvMa-CZHtPXsMr9t1K2zdRYHXg0tDewf7Q5S3RA8L159IdNFEk-q5UGzFi83r4mRVMtBcYQ.jpg?r=40c"
          }
        />
        <Product
          title="2. The Man With The Umbrella"
          paragrapgh='Cracks in the competition begin to show during "Dalgona," a game that shapes up to be a daunting endeavor amid sweet victories and painful extractions.'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaR6BjDuvDKkjLQ_Yr7EzHCKEEzBF2UxhZDH9B2Zh1ycZ-83hdP38-ozwwrjytSbwuwxvrS__SCYQpdHu2KBC4-CiMrNWG6QSmOhXzBHNlHjg2VVohkCCFHa.jpg?r=8fa"
          }
        />
        <Product
          title="3. War"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcE6fr-JP18Wq8cjk8onXRr48T_SFwahsJ2mvi9Uk77OoWFAtGKvzAu2ilFWG5Lkno4uL9MDAViLNjmsn3CBOoSJbjqiNH-5F9Sz5BfZ9zjdLaigpsYgGil2.jpg?r=b06"
          }
        />
        <Product
          title="4. Nowhere To Hide"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdbeLKWzkWzGfEQLs07K-j7qtCdp-_nPw7mBUvqlL560RrnHXAMoYuLLTQuAl49UHyVAsFU-E48YRd5idllNznYnFlBt-cSjBSBrVZ5MpSXqF9ckPmmnZs0c.jpg?r=e3f"
          }
        />
        <Product
          title="5. Trick Or Treat"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWknk-JyYSD-ZIp4vzPBbVVTYYz7_Q-1sMSHNFSWsvi8CT2576NkrvK-JsL4Sa_ODp6nZKZWSLyIwve0lZeiIttcpjMS79jNovYLcFygGtnfER7a1H_x3YYw.jpg?r=8bb"
          }
        />
      </div>
      <div className="product-wrapper">
        <Product
          title="6. Goodbye"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaoBb5ZHJEnSzmwmq96rcwI98lpvElQyq7l-2TQb55mL91b1_fsFLHZhbRQWl6S6brVM1OtQR1jtFvLTyzPEl5Vt9yFWOkHAgUVzQjt01Ytjb65vzhPeB0V7.jpg?r=6ec"
          }
        />
        <Product
          title="7. Friend And Foe"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd5EY1EPc34jjz9mCQIefjoIzlJFYrbm9k6Gf84M-pTt8ULGg-zIAEw7z3vp2t2VpCKZzJ0K2F38d9rhJuv0eXYS_uFzxbqyD7Sly-J_lC0lWjSYl0ZTRLAS.jpg?r=d02"
          }
        />
        <Product
          title="8. One Step Closer"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX92WbwSL6hZFqpuyF2zxP4jVCNjdvwaO-LexvgyTvPPAS1eduH8_EkQknqcr9C3985ckntWU1E_BT9NaqAd8NQB8cgZVwEnxWOCZ_L2qkxQK9t3e_WYINhH.jpg?r=088"
          }
        />
        <Product
          title="9. Circle Of Trust"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQgNUFi_tiw-jA1RhWktrwZwCxunqF6bNHk4MoPtJ86zsubazQGmQj1ixkgocdECUA3D-5Lf5tp63gb3e4dxYXIr5h-mIIRQqmFRYqn4RrecLqBu79OPpx7R.jpg?r=ab0"
          }
        />
        <Product
          title="10. One Lucky Day"
          paragrapgh='Kicking off this reality competition, hundreds of hopefuls in tracksuits set out to cross the finish line during a game of "Red Light, Green Light."'
          img={
            "https://occ-0-7681-3467.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbOsVVFq8eUDj202eHa62zuCocsxgbTyhRlYjFxMmk1F7-v8bDvBPcldWST_POUkepxq6ZcYi414dCzDDHU60_8jcGqDfEKdAmQrQ0xgYP8amwa8TLrYXvPB.jpg?r=d19"
          }
        />
      </div>
      <div className="theme-btn">
        <ThemeBtn />
        <h2>change color</h2>
      </div>
    </>
  );
}

export default ProductList;
