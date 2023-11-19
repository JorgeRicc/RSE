import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export const ODSS = [
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">Objetivos de Desarrollo Sostenible (ODS)</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        Los Objetivos de Desarrollo Sostenible (ODS) son el corazón de la Agenda 2030 y muestran una mirada integral, indivisible y una colaboración internacional renovada.  En conjunto, construyen una visión del futuro que queremos.
        <br />
        <br />
        A través de estos 17 ODS con sus 169 metas y 231 indicadores, los Estados miembros de Naciones Unidas han expresado firmemente que esta agenda es universal y profundamente transformadora. Con esta agenda se dejan atrás viejos paradigmas donde unos países donan mientras otros reciben ayuda condicionada. Esta agenda busca también expresar el principio de responsabilidades comunes pero diferenciadas y construir una verdadera alianza para el desarrollo donde todos los países participan.
        <br />
        <br />
        <strong>
        Los ODS…
        </strong>
        <br />
        <br />
        Son universales: Los ODS constituyen un marco de referencia verdaderamente universal y se aplicarán a todos los países. En la senda del desarrollo sostenible, todos los países tienen tareas pendientes y todos se enfrentan a retos tanto comunes como individuales en la consecución de las múltiples dimensiones del desarrollo sostenible resumidas en los ODS.
        <br />
        <br />
        Son transformadores: En su condición de programa para “la gente, el planeta, la prosperidad, la paz y las alianzas”, la Agenda 2030 ofrece un cambio de paradigma en relación con el modelo tradicional de desarrollo hacia un desarrollo sostenible que integra la dimensión económica, la social y la medioambiental. La Agenda 2030 proporciona una visión transformadora para un desarrollo sostenible centrado en las personas y el planeta, basado en los derechos humanos, y en la dignidad de las personas.
        <br />
        <br />
        Son civilizatorios: La Agenda 2030 trata de que nadie quede rezagado y contempla “un mundo de respeto universal hacia la igualdad y la no discriminación” entre los países y en el interior de estos, incluso en lo tocante a la igualdad, mediante la confirmación de la responsabilidad de todos los Estados de “respetar, proteger y promover los derechos humanos, sin distinción alguna de raza, color, sexo, idioma, religión, opinión política o de otro tipo, origen nacional o social, propiedad, nacimiento, discapacidad o cualquier otra condición.”
        <br />
        <br />
        Los ODS también son una herramienta de planificación y seguimiento para los países, tanto a nivel nacional como local. Gracias a su visión de largo plazo, constituirán un apoyo para cada país en su senda hacia un desarrollo sostenido, inclusivo y en armonía con el medio ambiente, a través de políticas públicas e instrumentos de planificación, presupuesto, monitoreo y evaluación. 
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">¿Qué es el Objetivo de Desarrollo Sostenible ODS3: Salud y bienestar?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        Los Objetivos de Desarrollo Sostenible (ODS) son el corazón de la Agenda 2030 y muestran una mirada integral, indivisible y una colaboración internacional renovada.  En conjunto, construyen una visión del futuro que queremos.
        <br />
        <br />
        El ODS 3 busca garantizar una vida sana y promover el bienestar para todos en todas las edades, y asegurar así el desarrollo sostenible. Entre sus metas está la reducción de la tasa mundial de mortalidad materna y poner fin a las muertes evitables de los recién nacidos y menores de cinco años. Se persigue el fin de las epidemias y enfermedades transmisibles y no transmisibles mediante prevención y tratamiento.
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">¿Qué es el Objetivo de Desarrollo Sostenible ODS4: Educación de calidad?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        La educación de calidad es clave para alcanzar una movilidad social y económica ascendente. Según datos de Naciones Unidas, durante los últimos diez años se consiguieron grandes avances a la hora de ampliar el acceso a la educación y las tasas de matriculación en las escuelas en todos los niveles, especialmente para las niñas. Pero pese a ello, alrededor de 260 millones de niños aún estaban fuera de la escuela en 2018.
        <br />
        <br />
        En 2020, y a consecuencia de la pandemia de la COVID-19, la mayor parte de los países anunciaron el cierre temporal de las escuelas y esto afectó a más del 91 % de los estudiantes en todo el mundo. En abril de 2020, cerca de 1.600 millones de niños y jóvenes estaban fuera de la escuela.
        <br />
        <br />
        Además, con el objetivo de proteger y garantizar el acceso a un aprendizaje continuo, el pasado mes de marzo de 2020 la UNESCO inició la Coalición Mundial para la Educación COVID-19. Se trata de una alianza multisectorial entre el sistema de las Naciones Unidas, las organizaciones de la sociedad civil, los medios de comunicación y los asociados de TI para diseñar e implantar soluciones innovadoras.
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">¿Qué es el Objetivo de Desarrollo Sostenible ODS5: Igualdad de género?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        La igualdad de género es un derecho humano fundamental y, además, es uno de los fundamentos esenciales para construir un mundo pacífico, próspero y sostenible, tal y como afirma Naciones Unidas.
        <br />
        <br />
        Durante las últimas décadas se han conseguido algunos avances como la escolarización paulatina de más niñas, que tiene su efecto en que se obliga a menos niñas cada vez al matrimonio precoz o la presencia de más mujeres en cargos parlamentarios o puestos directivos. En este sentido, las leyes se están reformando para fomentar esta igualdad de género. A pesar de todo ello, existen aún dificultades y datos que apuntan que aún queda mucho camino por recorrer. Por ejemplo, según datos de Naciones Unidas, las mujeres siguen estando infrarrepresentadas en todos los niveles de liderazgo político.
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">¿ODS 7: Energía asequible y no contaminante, ¿qué es y por qué es tan importante?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        El ODS 7 busca garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos. Actualmente, según datos del informe Tracking SDG 7: The Energy Progress Report 2023  hay 675 millones de personas que viven sin electricidad en todo el mundo. Este dossier ha sido elaborado por los cinco organismos custodios de este ODS: la Agencia Internacional de Energía, la Agencia Internacional de Energía Renovable, la División de Estadística de las Naciones Unidas, el Banco Mundial (BM) y la Organización Mundial de la Salud (OMS). 
        <br />
        <br />
        Según este informe, a pesar de algunos avances en los indicadores, el ritmo actual no es el adecuado para alcanzar ninguno de los objetivos de 2030. Las tasas de progreso varían significativamente de una región a otra y mientras algunas logran avances sustanciales, otras ralentizan su desarrollo o incluso retroceden. Además de los 675 millones de personas que siguen sin electricidad, 2.300 millones no tienen acceso a cocinas limpias. 
        <br />
        <br />
        El consumo de energías renovables ha aumentado desde 2010, pero es imprescindible incrementar sustancialmente la cuota de las energías limpias en el consumo total de energía final. Del mismo modo, a pesar de los progresos constantes, el ritmo de mejora de la eficiencia energética tiene una tendencia del 1,8 %, no alcanzando así el objetivo de aumentar un 2,6 % cada año entre 2010 y 2030.
        <br />
        <br />
        Por último, la pandemia provocada por el covid-19 provocó una disminución o ralentización de los flujos financieros públicos internacionales para apoyar las energías limpias en los países en desarrollo lo que puede retrasar la consecución del ODS 7, especialmente en el caso de los países que más lo necesitan. 
        <br />
        <br />
        Para alcanzar el ODS 7 para 2030 es necesario invertir en fuentes de energía limpia, como la solar, eólica o hidráulica y mejorar la productividad energética. También es imprescindible expandir la infraestructura y mejorar la tecnología para contar con energía limpia en todos los países en desarrollo. 
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">¿Qué es el Objetivo de Desarrollo Sostenible ODS10: Reducción de las desigualdades?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        El ODS 10 promueve la inclusión social, económica y política de todas las personas, independientemente de su edad, sexo, discapacidad, raza, etnia, origen, religión, situación económica u otra condición. Además, tiene por objetivo garantizar la igualdad de oportunidades y reducir la desigualdad, en particular mediante la eliminación de las leyes, políticas y prácticas discriminatorias y la promoción de leyes, políticas y medidas adecuadas a ese respecto.
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">¿Qué es el Objetivo de Desarrollo Sostenible ODS12: Producción y consumo responsables?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        El Objetivo de Desarrollo Sostenible número 12 consiste en garantizar el consumo responsable y eficiente de los recursos, así como medios de producción sostenibles.
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">ODS 13: Acción por el clima ¿qué es y por qué es tan importante?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        El ODS 13 se centra en la necesidad de adoptar medidas urgentes para acabar con el cambio climático que afecta a todos los países del mundo. Según relata la ONU, los científicos dedicados a las cuestiones climáticas ya han demostrado que las personas somos responsables del calentamiento global de los últimos 200 años. Las actividades humanas, tales como  la quema de combustibles fósiles, la deforestación, la pérdida de bosques o las actividades agrícolas y ganaderas que usan fertilizantes y otros productos químicos, han sido el principal motor del cambio climático. 
        <br />
        <br />
        Tal y como revela el Grupo Intergubernamental de Expertos sobre el Cambio Climático
(IPCC), es esencial reducir de forma radical, rápida y sostenida las emisiones de gases de efecto invernadero (GEI) en todos los sectores, y mantener estas medidas en el curso de la década. En su último informe de síntesis, el IPCC afirma de forma inequívoca que las actividades humanas, en particular más de un siglo de quema de combustibles fósiles, el uso no sostenible de la energía y los suelos, y los regímenes de consumo y producción insostenibles, provocaron un calentamiento mundial de 1,1°C por encima de los niveles preindustriales. Para limitar el calentamiento global a 1,5°C por encima de los niveles preindustriales, las emisiones ya deberían estar disminuyendo y necesitan reducirse casi a la mitad para 2030. 
        <br />
        <br />
        Los fenómenos meteorológicos extremos son cada vez más frecuentes e intensos y ya tienen repercusiones en todas las regiones. Entre 2010 y 2020, las regiones altamente
vulnerables, en las que viven aproximadamente entre 3.300 y 3.600 millones de personas, experimentaron tasas de mortalidad humana por inundaciones, sequías y tormentas 15 veces superiores a las de las regiones con una vulnerabilidad muy baja. Además, según datos de la Organización Mundial de la Salud (OMS), se prevé que, entre 2030 y 2050, el cambio climático cause unas 250.000 muertes adicionales cada año. Actualmente, la contaminación y las sustancias tóxicas causan al menos nueve millones de muertes prematuras al año en todo el mundo. 
        <br />
        <br />
        Revertir las cifras mencionadas anteriormente solo es alcanzable actuando a nivel mundial, desde todos los ámbitos y con firmeza. Es por este motivo que adoptar medidas urgentes para combatir el cambio climático se ha convertido en el ODS 13 de los 17 Objetivos de Desarrollo Sostenible de la ONU, aprobados en septiembre de 2015 como parte de la Agenda 2030.
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg text-center px-[1rem]">ODS 17: Alianzas para lograr los objetivos ¿qué es y por qué es tan importante?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        El ODS 17 pretende fortalecer la Alianza Mundial para el Desarrollo Sostenible, partiendo de la idea de que los ODS solo se pueden conseguir mediante asociaciones mundiales sólidas y cooperación. Las uniones y alianzas entre los diferentes actores —como gobiernos, sector privado y sociedad civil— permiten movilizar e intercambiar conocimientos, capacidad técnica, tecnología y recursos.
        <br />
        <br />
        Según la ONU, en su Informe sobre los progresos en el cumplimiento de los ODS de 2023, los avances han sido desiguales. Se ha avanzado en ámbitos como la ayuda para el desarrollo, el flujo de remesas y el acceso a la tecnología. Sin embargo, la ONU considera que la financiación para el desarrollo sigue siendo un gran desafío, en particular en los países de ingreso bajo. Sin olvidar las tensiones geopolíticas que han dificultado aún más la cooperación así como una inflación récord, el aumento de los tipos de interés y una amenazante carga de la deuda con la que están lidiando muchos países en desarrollo. 
        <br />
        <br />
        En dicho informe, se apunta a que los niveles de deuda de muchos países alcanzaron máximos históricos durante la pandemia; de hecho la deuda externa total de los países de ingresos bajos y medios alcanzó los 9 billones de dólares en 2021, es decir, un aumento del 5,6 %. A finales de 2022, más de la mitad (37 de 69) de los países más pobres del mundo corrían un alto riesgo de endeudamiento excesivo o ya lo estaban sufriendo. Estos niveles de deuda representan una potencial amenaza para el crecimiento económico.
        <br />
        <br />
        Además, a pesar del enorme aumento sin precedentes del comercio mundial tras la pandemia —32 billones de dólares en 2022— la proporción de exportaciones de los países menos adelantados se estancó, su proporción en el comercio mundial de bienes fue únicamente el 1,1 %, lo que supone un aumento de tan solo 0,07 puntos porcentuales. En cuanto al uso de internet, se calcula que 5.300 millones de personas —el 66 % de la población mundial— utilizaron Internet en 2022, lo que supone un aumento sustancial con respecto a la cobertura del 40 % observada en 2015. Sin embargo, 2.700 millones de personas siguen sin disponer de conexión, por lo que aún queda mucho por hacer para alcanzar la meta de conectividad universal para 2030. Además, a nivel mundial, el 69 % de los hombres utiliza Internet, frente al 63 % de las mujeres, es decir, que hay 259 millones más de usuarios masculinos de Internet que usuarias femeninas. 
        <br />
        <br />
        Revertir esta realidad se ha convertido en un objetivo primordial en el ámbito internacional. Por este motivo, es vital proteger y continuar con las alianzas para no dejar a nadie atrás. Solo la unión de todos los actores hará posible la consecución de los objetivos fijados, y de ahí que resulte tan importante el ODS 17 de los Objetivos de Desarrollo Sostenible de la ONU, aprobados en septiembre de 2015 como parte de la Agenda 2030.
        </p>
    </>,
]


const ODS = (prop) => {

    let { odsId } = useParams();



    return(
        <section className="py-[3rem] flex flex-col justify-center items-center">
            {
                (parseInt(odsId) < 0 || parseInt(odsId) > ODSS.length - 1) && (<Navigate to="/404" replace={true} />)
            }
            {ODSS[parseInt(odsId)]}
        </section>
    );
}

export default ODS;