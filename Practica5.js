// COTIZADOR DE SEGUROS

//  1  Seleccion de cobertura (switch)
let Val = 0;
Cobertura(Val);
MostrarTotal(Val);

function Cobertura(){
    let CodPlan = prompt("Ingrese el código de plan");
    let Cobertura = "";
    switch(CodPlan){
        case "A1-SR":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. - Seguro Acc. Personales. - Seguro Sepelio. - Sin Servicio de Remolques.";
            Val=6000;
            break;
        case "A1":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. - Seguro Acc. Personales. - Seguro Sepelio.";
            Val=9000;
            break;
        case "R1-SR":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total por robo o hurto. - Seguro Acc. Personales. - Seguro Sepelio. - Sin Servicio de Remolques.";
            Val=12000;
            break;
        case "R1":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total por robo o hurto. - Seguro Acc. Personales. - Seguro Sepelio.";
            Val=18000;
            break;
        case "L1":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total por incendio y por robo o hurto. - Seguro Acc. Personales. - Seguro Sepelio.";
            Val=24000;
            break;
        case "SL-SR":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total y parcial por incendio. Pérdida total por robo o hurto. Pérdida parcial por robo o hurto a consecuencia de robo o hurto total. Cristales laterales $25.000. Seguro de Sepelio. Seguro de Vida. - Sin Servicio de Remolques.";
            Val=30000;
            break;
        case "SL":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total y parcial por incendio. Pérdida total por robo o hurto. Pérdida parcial por robo o hurto a consecuencia de robo o hurto total. Cristales laterales $25.000. Seguro de Sepelio. Seguro de Vida.";
            Val=36000;
            break;
        case "S":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total y parcial por incendio y robo o hurto. Cristales laterales $25.000. Seguro de Sepelio. Seguro de Vida.";
            Val=42000;
            break;
        case "SP-SR":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total y parcial por incendio y robo o hurto. Cristales laterales, luneta y parabrisas $35.000. Daños parciales a consecuencia de granizo $35.000. Cobertura de muerte o invalidez total y permanente en accidente de tránsito. Seguro de Sepelio. Seguro de Vida. - Sin Servicio de Remolques.";
            Val=48000;
            break;
        case "SP":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total y parcial por incendio y robo o hurto. Cristales laterales, luneta y parabrisas $35.000. Daños parciales a consecuencia de granizo $35.000. Cobertura de muerte o invalidez total y permanente en accidente de tránsito. Seguro de Sepelio. Seguro de Vida.";
            Val=54000;
            break;
        case "C":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados . Pérdida total por accidente y pérdida total y parcial por incendio, robo o hurto. Cristales laterales, luneta y parabrisas $60.000. Daños a Cerradura $ 15.000. Daños parciales a consecuencia de granizo $70.000 Daños parciales a consecuencia de Robo/Hurto Total hasta la suma de $60.000 por vigencia de póliza. Cobertura de muerte o invalidez total y permanente en accidente de tránsito. Esta cobertura incluye un seguro de INCENDIO para su hogar. Seguro de Sepelio. Seguro de Vida.";
            Val=60000;
            break;
        case "C2":
            Cobertura = "Responsabilidad Civil por lesiones y/o muerte y daños a cosas de terceros no transportados y por lesiones y/o muerte únicamente de terceros transportados. Pérdida total por accidente y pérdida total y parcial por incendio, robo o hurto. Cristales laterales, luneta y parabrisas SIN LIMITE. Daños a Cerradura $ 30.000. Daños parciales a consecuencia de granizo SIN LIMITE. Daños parciales a consecuencia de Robo/Hurto Total SIN LIMITE y SIN FRANQUICIA. Daños parciales por Inundación o Desbordamiento. Cobertura de muerte o invalidez total y permanente en accidente de tránsito. Esta cobertura incluye un seguro de INCENDIO para su hogar. Seguro de Sepelio. Seguro de Vida.";
            Val=66000;
            break;
    }
    window.alert(Val);
    window.alert(Cobertura);
    return Val;
}

//  2  Mostrar pago en cuotas del valor semestral

function MostrarTotal(){
    const suma = (a,b) => (a+b);
    const div6 = x => x/6;
    const iva = x => x*0.21;

    let total = suma(Val, iva(Val));
    let cuotas = div6(total)

    window.alert(total);
    window.alert(cuotas);
}
