//VARIAVEL CONTROLO DE FLUXO DO BOTAO
import {format} from "date-fns";
import {pt} from "date-fns/locale";

export default function formatDate(oldDate)
{
    return format(oldDate, "EEE dd MMMM", {locale:pt});
}