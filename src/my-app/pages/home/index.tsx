import React, { useEffect, useRef } from "react";

import useScroll from "../../hooks/use-scroll";

const PageHome = () => {
  const scroll = useScroll();

  // FIXME: Cách làm tào lao, dở ẹc
  useEffect(() => {
    const btn = document.querySelector(".btn-to-top") as HTMLButtonElement;
    if (btn) btn.style.display = scroll > 100 ? "block" : "none";
  }, [scroll]);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis
        amet modi a, rem numquam cumque dolores ipsa ex neque magnam aut nihil
        non laborum hic ratione ducimus consequuntur natus perferendis? Vel,
        tempora. Harum, reiciendis modi laudantium explicabo ipsa aperiam itaque
        dolorum rerum rem quis sint. Laborum itaque asperiores earum maxime,
        possimus vitae sequi consequatur architecto deserunt quisquam dolore
        porro unde, id nulla excepturi corporis fugiat voluptatem et nostrum? Ut
        quas quam illo dolore magnam cum quos aut, nobis quo necessitatibus eum
        quibusdam nulla sequi iste id tempore minus doloremque harum delectus
        nostrum vel fugit voluptate eius quia. Qui optio eos tempora unde magni
        corporis illo quasi reprehenderit, impedit, nihil rem dolore labore id
        est! Quia neque eaque voluptas ipsum odit magnam ipsa atque hic
        voluptatum molestias laborum obcaecati fugiat nisi nemo cupiditate magni
        repudiandae minima id quis, reiciendis dolor nam veritatis culpa. Quidem
        distinctio laboriosam tenetur officia esse dignissimos omnis est itaque
        aut vel temporibus architecto iure dolorum eveniet, doloremque non id
        nulla nobis quam quasi rerum accusamus ipsa possimus! Doloribus
        incidunt, accusantium dolorem dignissimos vel iste temporibus doloremque
        magnam voluptatem mollitia nostrum nisi. Illum eveniet blanditiis
        voluptate voluptatibus tempore totam facilis? Quae iusto nisi inventore
        nobis tenetur, laboriosam ad ipsum beatae minima corporis similique
        eligendi perferendis laudantium. Reiciendis illo deleniti nihil
        assumenda sint cum fugit ullam sequi quidem tempora repudiandae rem ipsa
        esse magnam unde, officia culpa explicabo obcaecati similique asperiores
        tenetur! Sint nulla autem harum voluptatibus culpa deleniti fugit
        eligendi sequi repellendus esse eaque quo maxime a voluptatum
        perferendis itaque inventore placeat eos et, blanditiis voluptas odit
        totam! Iure sequi ducimus accusamus molestiae aliquid non dolore. Eius
        blanditiis, molestias quod exercitationem nemo similique, dolorem
        debitis reiciendis modi facere tenetur culpa molestiae fugiat. Provident
        libero omnis aliquam et possimus, eaque doloremque aut ipsam voluptatem
        mollitia unde corrupti rerum eum sed molestiae ratione veniam odit sit,
        neque quis nam, labore praesentium doloribus dignissimos! Delectus
        voluptatibus aut corrupti eum explicabo, consequuntur consectetur.
        Quisquam, delectus nobis minima eveniet deleniti ipsum ad aliquid neque
        distinctio doloribus dolorem quasi debitis nihil iure! Dolorem,
        similique facere error, voluptatum illo soluta voluptate amet nulla
        velit tempore dolores minima sunt quidem, sit officia recusandae
        excepturi impedit mollitia quam. Dicta asperiores iusto quia maiores
        explicabo temporibus aliquam illo perferendis atque maxime voluptas,
        quam natus, in ratione non sapiente animi nobis ipsa eveniet quas quos
        officiis molestias libero laborum. Nisi nesciunt est omnis consequuntur
        cum soluta unde explicabo repellat doloremque tenetur, veritatis quaerat
        officiis illum fuga id expedita fugit dolore! Quo, iusto suscipit iure
        delectus officiis dolorem veritatis rem, aperiam commodi libero
        doloribus debitis porro autem architecto asperiores, dolorum
        exercitationem est! Ducimus repellat repudiandae velit hic, blanditiis
        omnis quam pariatur. Ea quos magni sapiente quis porro tempore dolorem
        explicabo et cumque accusamus eaque, exercitationem velit eos quas nam
        quasi voluptatem suscipit alias at laborum quidem aliquam facere ipsum!
        Labore dolores iste assumenda, quis beatae exercitationem accusamus
        omnis corporis. Quaerat qui dolor deserunt sequi aliquam nostrum
        molestias unde labore repudiandae dolores? Odit dolor magni ad. Eos unde
        aspernatur consequuntur earum esse odio aperiam delectus! Minima iure
        quis esse necessitatibus maiores, in obcaecati numquam, officiis, nobis
        iusto non? Voluptas, neque, possimus consequuntur fugiat doloribus ullam
        minima quos odio quidem minus maiores earum ea delectus porro repellat?
        Itaque ad autem velit quos provident neque dignissimos, fugit at
        praesentium placeat eos cum illum iusto incidunt unde minus cumque,
        dolore quis sunt? Voluptas libero illo, sit expedita voluptatibus
        eligendi dicta vel, quidem dolorem ut delectus placeat possimus
        recusandae rerum rem reprehenderit nesciunt quam sed quo facilis ullam
        sint! Harum excepturi recusandae qui officiis nisi laboriosam laborum
        hic accusantium. Doloremque, unde quaerat explicabo harum ullam quas
        fuga minima exercitationem fugiat at, excepturi hic, veniam incidunt ab
        sapiente repellendus quod placeat ducimus inventore ipsam. In obcaecati
        expedita laboriosam corporis ab alias numquam ullam assumenda esse
        itaque, impedit ex? Quas, tempora accusamus quidem et deserunt illum
        inventore itaque iure, explicabo saepe ut. Voluptas voluptatum veritatis
        deserunt assumenda magni sit ipsam nobis reiciendis delectus unde alias
        repudiandae quia totam, dolorem, dolore exercitationem voluptatibus vel
        ut aliquid tempore, vero explicabo! Eligendi expedita inventore
        dignissimos cum explicabo culpa deserunt optio omnis nobis doloremque
        distinctio at tenetur harum recusandae ex, fuga error minus eveniet
        illum accusamus, hic ad vel. Hic pariatur, voluptatibus fugit sunt eum
        minus placeat necessitatibus officia vitae, voluptate iste esse illo
        voluptatem natus! Qui aut maiores adipisci, quos quod assumenda
        dignissimos atque excepturi fugit non placeat modi omnis totam nesciunt
        necessitatibus quas ut ea suscipit sed deleniti officia aperiam corporis
        quam tempore? Nulla fuga veniam optio rem veritatis reprehenderit at
        aperiam. Expedita, repudiandae quasi quibusdam, aliquam quaerat corporis
        omnis maxime labore molestiae esse cumque, tempora ratione consequatur
        debitis quisquam perferendis aperiam cupiditate sed deserunt neque
        doloremque? Nesciunt provident dolor, vitae numquam adipisci tempora,
        laborum ut blanditiis nihil amet earum quae sunt eos totam libero.
        Incidunt rerum consequuntur libero fugiat suscipit modi, eaque maiores
        ullam fugit amet voluptatem vitae optio qui dolorum? Esse deserunt
        facilis voluptatum, dolorem, maxime expedita asperiores amet recusandae
        corrupti, velit assumenda totam! Voluptates aut neque est aperiam,
        officiis repellat! Aliquid, atque inventore pariatur commodi odit
        facilis impedit eum porro beatae nihil perspiciatis cupiditate debitis
        consectetur accusamus tempora quo ea corrupti maxime, necessitatibus
        vitae officiis fuga ullam explicabo! Eum recusandae dolorem et sed esse
        dolore, id molestiae numquam, quam eius quidem cumque reiciendis
        provident accusantium repellendus facere. Magnam ratione rem soluta
        labore, aspernatur mollitia blanditiis totam facilis tempore molestiae
        cum itaque quos amet esse! Voluptatum illo aspernatur enim in corrupti
        harum, facilis iure at laudantium maxime impedit veniam dolorem
        consequatur neque amet, dolorum libero. Rem non incidunt tempora
        consequuntur magni delectus voluptates cumque? Voluptates, sapiente.
        Dignissimos sint tempora quidem, commodi quod quas dolor ab. Nemo,
        quibusdam? Nobis eaque nesciunt labore in at dolores est esse voluptate
        repudiandae delectus quasi nisi consequatur maiores tempora, nemo
        expedita sint saepe ad doloremque adipisci maxime quidem? Magni placeat
        at ipsum rem maiores optio vitae assumenda debitis, quaerat vero?
        Impedit tempora quos eius exercitationem ab reiciendis facilis ex!
        Eveniet repudiandae architecto vitae laborum optio corrupti nemo ad
        accusamus molestias ullam!
      </p>
    </>
  );
};

export default PageHome;
