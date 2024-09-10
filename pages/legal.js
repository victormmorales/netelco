import { CookiesBanner } from "../components/ui/Cookies";

export default function LegalNotice() {
  return (
    <div className="mt-100">
      <div className="custom-screen pt-10">
        <br />
        <br />
        <br />
        <h1 style={{ fontWeight: 700 }}>Aviso legal</h1>
        <br />
        <p>
          <span style={{ fontWeight: 500 }}>© NETELCO EMPRESAS S.L</span>, C/
          Arte 33, 28033 Madrid, España.
        </p>
        <br />
        <p>
          Registro Mercantil de Madrid, tomo 45492, folio 113, inscripción
          primera, hoja M-800165, y con CIF. B56255086
        </p>
        <br />
        <p>Todos los derechos reservados.</p>
        <br />
        <ol>
          <li>
            Los derechos de propiedad intelectual de la(s) página(s) web de
            NETELCO EMPRESAS S.L., su código fuente, diseño, y los distintos
            elementos en él contenidos son titularidad de NETELCO EMPRESAS S.L,
            en adelante NETELCO, a quien corresponde el ejercicio exclusivo de
            los derechos de explotación de los mismos en cualquier forma y, en
            especial, los derechos de propiedad intelectual inmateriales en su
            calidad de autor creador, y los derechos con contenido económico
            (reproducción, distribución, comunicación pública y transformación).
          </li>
          <br />
          <li>
            Estas condiciones generales regulan el acceso y utilización de los
            sitios web del dominio netelco.es que NETELCO pone gratuitamente a
            disposición de los usuarios de Internet. El acceso al mismo implica
            su aceptación sin reservas. La utilización de determinados servicios
            ofrecidos en este sitio se regirá además por las condiciones
            particulares previstas en cada caso, y se entenderán aceptadas por
            el mero uso de tales servicios.
          </li>
          <br />
          <li>
            Se autoriza la visualización, impresión y descarga parcial del
            contenido de la web, pero exclusivamente si concurren
            simultáneamente las siguientes condiciones:
            <ul>
              <li>
                Que su uso sea compatible con los fines de la web netelco.es
              </li>
              <li>
                Que se realice con el exclusivo ánimo de obtener la información
                contenida para uso personal y privado. Se prohíbe expresamente
                su utilización con fines comerciales
              </li>
              <li>
                Que ninguno de los contenidos de netelco.es sea modificado en
                manera alguna.
              </li>
              <li>
                Que ningún gráfico, icono o imagen de netelco.es sea utilizado
                por separado del texto o resto de imágenes que lo acompañan.
              </li>
            </ul>
          </li>
          <br />
          <li>
            NETELCO se reserva la facultad de efectuar en cualquier momento y
            sin necesidad de aviso alguno las modificaciones y actualizaciones
            de la información contenida en sus sitios web, de su presentación, y
            de las condiciones de acceso a los mismos.
          </li>
          <li>
            NETELCO no garantiza la inexistencia de interrupciones en el acceso
            a sus sitios web ni que su contenido se encuentre permanentemente
            actualizado. No obstante lo anterior, NETELCO pondrá su mejor empeño
            en el mantenimiento y actualización de su contenido.
          </li>
          <br />
          <li>
            Tanto el acceso a los sitios web de NETELCO como el uso que pueda
            hacerse de la información contenida en el mismo es de la exclusiva
            responsabilidad de quien lo realiza. NETELCO no responderá de
            ninguna consecuencia, daño o perjuicio que pudieran derivarse de
            dicho acceso o uso de la información, ni se hace responsable de los
            posibles fallos de seguridad ni de los posibles daños que por
            cualesquiera motivos se pudieran producir en el sistema informático
            del usuario.
          </li>
          <br />
          <li>
            La información contenida en los sitios web propiedad de NETELCO
            tienen mera finalidad informativa y NO constituyen una oferta
            comercial salvo que expresamente así se indique de forma explícita e
            indubitada.
          </li>
          <br />
          <li>
            NETELCO no asume responsabilidad alguna derivada de la concesión o
            contenidos de los enlaces de terceros a los que se puedan hacer
            referencia en sus sitios web, ni garantiza la ausencia de virus u
            otros elementos en los mismos que puedan producir alteraciones en el
            sistema informático (hardware y/o software), los documentos o los
            ficheros del usuario, ni se hace responsable por los daños de
            cualquier clase causados al usuario por este motivo.
          </li>
          <br />
          <li>
            NETELCO EMPRESAS S.L. es titular de los derechos de propiedad
            industrial referidos a sus productos y servicios, y específicamente
            de los relativos a la marca registrada «NETELCO». Respecto a las
            citas de productos y servicios de terceros, NETELCO reconoce a favor
            de sus respectivos titulares los correspondientes plenos derechos de
            propiedad industrial e intelectual, no implicando su sola mención la
            existencia de derechos o responsabilidad alguna de NETELCO sobre los
            mismos, ni su respaldo o recomendación salvo que así se indique de
            forma expresa e indubitada por NETELCO.
          </li>
          <br />
          <li>
            Todo enlace de terceros a esta web debe serlo a su página principal
            o de entrada.
          </li>
          <br />
          <li>
            En caso de que con motivo de lo aquí estipulado pudiese plantearse
            proceso ante los Tribunales de Justicia, tanto NETELCO EMPRESAS S.L
            como el usuario se someten con renuncia expresa a cualquier otro
            fuero a los juzgados y tribunales Madrid.
          </li>
        </ol>
      </div>
      <CookiesBanner />
    </div>
  );
};
