/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function ajaxCallSync(url, type, data) {
    return $.ajax({
        type: type,
        url: url,
        data: data,
        async: false,
        timeout: 30000
    });
}
;

function abrirFormulario(data) {
    var formulario = apertura;
    formulario += data.json.tag;
    formulario += espacio;
    formulario += "id=" + comilla + data.json.id + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.name + comilla;
    formulario += espacio;
    formulario += "action=" + comilla + data.json.action + comilla;
    formulario += cierre;
    return formulario;
}

function cerrarFormulario(data) {
    var formulario = apertura;
    formulario += barra;
    formulario += data.json.tag;
    formulario += cierre;
    return formulario;
}

function procesaElementoInputSubmit(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "type=" + comilla + data.json.elements[index].type + comilla;
    formulario += espacio;
    formulario += "id=" + comilla + data.json.elements[index].id + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.elements[index].name + comilla;
    formulario += cierre;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    formulario += salto;
    return formulario;
}

function procesaElementoInputReset(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "type=" + comilla + data.json.elements[index].type + comilla;
    formulario += espacio;
    formulario += "id=" + comilla + data.json.elements[index].id + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.elements[index].name + comilla;
    formulario += cierre;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    formulario += salto;
    return formulario;
}

function procesaElementoLabel(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "for=" + comilla + data.json.elements[index].labelfor + comilla;
    formulario += cierre;
    formulario += data.json.elements[index].text;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    formulario += salto;
    return formulario;
}
function procesaElementoInputText(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "type=" + comilla + data.json.elements[index].type + comilla;
    formulario += espacio;
    formulario += "id=" + comilla + data.json.elements[index].id + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.elements[index].name + comilla;
    formulario += cierre;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    formulario += salto;
    return formulario;
}

function procesaElementoInputHidden(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "type=" + comilla + data.json.elements[index].type + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.elements[index].name + comilla;
    formulario += cierre;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    return formulario;
}


function procesaElementoInputCheckbox(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "type=" + comilla + data.json.elements[index].type + comilla;
    formulario += espacio;
    formulario += "id=" + comilla + data.json.elements[index].id + comilla;
    formulario += espacio;
    formulario += "value=" + comilla + data.json.elements[index].value + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.elements[index].name + comilla;
    formulario += cierre;
    formulario += data.json.elements[index].text;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    formulario += salto;
    return formulario;
}


function procesaElementoInputRadio(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "type=" + comilla + data.json.elements[index].type + comilla;
    formulario += espacio;
    formulario += "id=" + comilla + data.json.elements[index].id + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.elements[index].name + comilla;
    formulario += cierre;
    formulario += data.json.elements[index].text;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    formulario += salto;
    return formulario;
}

function procesaElementoInputButton(index, data) {
    var formulario = apertura;
    formulario += data.json.elements[index].tag;
    formulario += espacio;
    formulario += "type=" + comilla + data.json.elements[index].type + comilla;
    formulario += espacio;
    formulario += "id=" + comilla + data.json.elements[index].id + comilla;
    formulario += espacio;
    formulario += "value=" + comilla + data.json.elements[index].value + comilla;
    formulario += espacio;
    formulario += "name=" + comilla + data.json.elements[index].name + comilla;
    formulario += cierre;
    formulario += apertura;
    formulario += barra;
    formulario += data.json.elements[index].tag;
    formulario += cierre;
    formulario += salto;
    return formulario;
}


function procesaElementoInputSelect(index, data) {
    var option = apertura;
    option += data.json.elements[index].tag;
    option += espacio;
    option += "id=" + comilla + data.json.elements[index].id + comilla;
    option += espacio;
    option += "name=" + comilla + data.json.elements[index].name + comilla;
    option += cierre;

    $.each(data.json.elements[index].options, function (index, valor) {
        option += apertura;
        option += valor.tag;
        option += espacio;
        option += "id=" + comilla + valor.id + comilla;
        option += espacio;
        option += "value=" + comilla + valor.value + comilla;
        option += cierre;
        option += valor.text;
        option += apertura;
        option += barra;
        option += valor.tag;
        option += cierre;
        option += salto;
    });

    option += apertura;
    option += barra;
    option += data.json.elements[index].tag;
    option += cierre;
    option += salto;
    return option;
}



var espacio = ' ';
var comilla = "'";
var salto = "<br />";
var apertura = "<";
var cierre = ">";
var barra = "/";
$(document).ready(function () {

    $("#form01").click(function () {
        $.when(ajaxCallSync('control?ob=form&op=get&num=1', 'GET', '')).done(function (data) {
            $("#paneljson").text(JSON.stringify(data));
            //-----------
            formulario = "";
            formulario += abrirFormulario(data);
            $.each(data.json.elements, function (index, valor) {
                if (data.json.elements[index].tag == "label") {
                    formulario += procesaElementoLabel(index, data);
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "text") {
                        formulario += procesaElementoInputText(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "reset") {
                        formulario += procesaElementoInputReset(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "submit") {
                        formulario += procesaElementoInputSubmit(index, data);
                    }
                }
            });
            //-----------                        
            formulario += cerrarFormulario(data);
            //------------
            $("#panelhtml").text(formulario);
            //------------
            $("#panelformulario").html(formulario);
        });
    });

    $("#form02").click(function () {
        $.when(ajaxCallSync('control?ob=form&op=get&num=2', 'GET', '')).done(function (data) {
            $("#paneljson").text(JSON.stringify(data));
            //-----------
            formulario = "";
            formulario += abrirFormulario(data);
            $.each(data.json.elements, function (index, valor) {
                if (data.json.elements[index].tag == "label") {
                    formulario += procesaElementoLabel(index, data);
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "text") {
                        formulario += procesaElementoInputText(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "reset") {
                        formulario += procesaElementoInputReset(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "submit") {
                        formulario += procesaElementoInputSubmit(index, data);
                    }
                }
            });
            //-----------                        
            formulario += cerrarFormulario(data);
            //------------
            $("#panelhtml").text(formulario);
            //------------
            $("#panelformulario").html(formulario);
        });
    });

    $("#form03").click(function () {
        $.when(ajaxCallSync('control?ob=form&op=get&num=3', 'GET', '')).done(function (data) {
            $("#paneljson").text(JSON.stringify(data));
            //-----------
            formulario = "";
            formulario += abrirFormulario(data);
            $.each(data.json.elements, function (index, valor) {
                if (data.json.elements[index].tag == "label") {
                    formulario += procesaElementoLabel(index, data);
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "text") {
                        formulario += procesaElementoInputText(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "reset") {
                        formulario += procesaElementoInputReset(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "submit") {
                        formulario += procesaElementoInputSubmit(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "hidden") {
                        formulario += procesaElementoInputHidden(index, data);
                    }
                }
            });
            //-----------                        
            formulario += cerrarFormulario(data);
            //------------
            $("#panelhtml").text(formulario);
            //------------
            $("#panelformulario").html(formulario);
        });
    });

    $("#form04").click(function () {
        $.when(ajaxCallSync('control?ob=form&op=get&num=4', 'GET', '')).done(function (data) {
            $("#paneljson").text(JSON.stringify(data));
            //-----------
            formulario = "";
            formulario += abrirFormulario(data);
            $.each(data.json.elements, function (index, valor) {
                if (data.json.elements[index].tag == "label") {
                    formulario += procesaElementoLabel(index, data);
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "text") {
                        formulario += procesaElementoInputText(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "reset") {
                        formulario += procesaElementoInputReset(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "submit") {
                        formulario += procesaElementoInputSubmit(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "hidden") {
                        formulario += procesaElementoInputHidden(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "checkbox") {
                        formulario += procesaElementoInputCheckbox(index, data);
                    }
                }
            });
            //-----------                        
            formulario += cerrarFormulario(data);
            //------------
            $("#panelhtml").text(formulario);
            //------------
            $("#panelformulario").html(formulario);
        });
    });
    $("#form05").click(function () {
        $.when(ajaxCallSync('control?ob=form&op=get&num=5', 'GET', '')).done(function (data) {
            $("#paneljson").text(JSON.stringify(data));
            //-----------
            formulario = "";
            formulario += abrirFormulario(data);
            $.each(data.json.elements, function (index, valor) {
                if (data.json.elements[index].tag == "label") {
                    formulario += procesaElementoLabel(index, data);
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "text") {
                        formulario += procesaElementoInputText(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "reset") {
                        formulario += procesaElementoInputReset(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "submit") {
                        formulario += procesaElementoInputSubmit(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "hidden") {
                        formulario += procesaElementoInputHidden(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "checkbox") {
                        formulario += procesaElementoInputCheckbox(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "radio") {
                        formulario += procesaElementoInputRadio(index, data);
                    }
                }

            });
            //-----------                        
            formulario += cerrarFormulario(data);
            //------------
            $("#panelhtml").text(formulario);
            //------------
            $("#panelformulario").html(formulario);
        });
    });
    $("#form06").click(function () {
        $.when(ajaxCallSync('control?ob=form&op=get&num=6', 'GET', '')).done(function (data) {
            $("#paneljson").text(JSON.stringify(data));
            //-----------
            formulario = "";
            formulario += abrirFormulario(data);
            $.each(data.json.elements, function (index, valor) {
                if (data.json.elements[index].tag == "label") {
                    formulario += procesaElementoLabel(index, data);
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "text") {
                        formulario += procesaElementoInputText(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "reset") {
                        formulario += procesaElementoInputReset(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "submit") {
                        formulario += procesaElementoInputSubmit(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "hidden") {
                        formulario += procesaElementoInputHidden(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "checkbox") {
                        formulario += procesaElementoInputCheckbox(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "radio") {
                        formulario += procesaElementoInputRadio(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "button") {
                        formulario += procesaElementoInputButton(index, data);
                    }
                }

            });
            //-----------                        
            formulario += cerrarFormulario(data);
            //------------
            $("#panelhtml").text(formulario);
            //------------
            $("#panelformulario").html(formulario);
        });
    });
    $("#form07").click(function () {
        $.when(ajaxCallSync('control?ob=form&op=get&num=7', 'GET', '')).done(function (data) {
            $("#paneljson").text(JSON.stringify(data));
            //-----------
            formulario = "";
            formulario += abrirFormulario(data);
            $.each(data.json.elements, function (index, valor) {
                if (data.json.elements[index].tag == "label") {
                    formulario += procesaElementoLabel(index, data);
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "text") {
                        formulario += procesaElementoInputText(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "reset") {
                        formulario += procesaElementoInputReset(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "submit") {
                        formulario += procesaElementoInputSubmit(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "hidden") {
                        formulario += procesaElementoInputHidden(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "checkbox") {
                        formulario += procesaElementoInputCheckbox(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "radio") {
                        formulario += procesaElementoInputRadio(index, data);
                    }
                }
                if (data.json.elements[index].tag == "input") {
                    if (data.json.elements[index].type == "button") {
                        formulario += procesaElementoInputButton(index, data);
                    }
                }
                if (data.json.elements[index].tag == "select") {
                    formulario += procesaElementoInputSelect(index, data);
                }

            });
            //-----------                        
            formulario += cerrarFormulario(data);
            //------------
            $("#panelhtml").text(formulario);
            //------------
            $("#panelformulario").html(formulario);
        });
    });
});