<%@page pageEncoding="UTF-8" %>
<%
    String parentId=request.getParameter("parentId");

    String json1="{" +
            "\"code\": 0," +
            "\"msg\": \"\"," +
            "\"data\": [{" +
            "\"id\": 517," +
            "\"baseCode\": \"700\"," +
            "\"keyName\": \"评委会导航\"," +
            "\"keyShortName\": \"评委会\"," +
            "\"keyValue\": \"评委会导航\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"评委会树\"," +
            "\"sort\": 1995.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 0," +
            "\"level\": 1," +
            "\"allClassId\": \"0,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": true," +
            "\"lockPass\": \"goodghost\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}]," +
            "\"success\": true" +
            "}";

    String json2="{" +
            "\"code\": 0," +
            "\"msg\": \"\"," +
            "\"data\": [{" +
            "\"id\": 518," +
            "\"baseCode\": \"701\"," +
            "\"keyName\": \"云南省\"," +
            "\"keyShortName\": \"云南省\"," +
            "\"keyValue\": \"01\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"云南省\"," +
            "\"sort\": 0.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 517," +
            "\"level\": 2," +
            "\"allClassId\": \"0,517,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}]," +
            "\"success\": true" +
            "}";
    String json3="{" +
            "\"code\": 0," +
            "\"msg\": \"\"," +
            "\"data\": [{" +
            "\"id\": 520," +
            "\"baseCode\": \"7010\"," +
            "\"keyName\": \"昆明市\"," +
            "\"keyShortName\": \"\"," +
            "\"keyValue\": \"010\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"\"," +
            "\"sort\": 666.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 912," +
            "\"baseCode\": \"7011\"," +
            "\"keyName\": \"曲靖市\"," +
            "\"keyShortName\": \"曲靖市\"," +
            "\"keyValue\": \"011\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖2个市辖区、6个县，代管1个县级市。市人民政府驻麒麟区文昌街78号。\"," +
            "\"sort\": 665.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 913," +
            "\"baseCode\": \"7012\"," +
            "\"keyName\": \"玉溪市\"," +
            "\"keyShortName\": \"玉溪\"," +
            "\"keyValue\": \"012\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖2个市辖区、4个县、3个自治县。市人民政府驻红塔区聂耳路。\"," +
            "\"sort\": 664.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 914," +
            "\"baseCode\": \"7013\"," +
            "\"keyName\": \"保山市\"," +
            "\"keyShortName\": \"保山\"," +
            "\"keyValue\": \"013\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个市辖区、3个县，代管1个县级市。市人民政府驻隆阳区同仁街。\"," +
            "\"sort\": 663.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 915," +
            "\"baseCode\": \"7014\"," +
            "\"keyName\": \"昭通市\"," +
            "\"keyShortName\": \"昭通\"," +
            "\"keyValue\": \"昭通\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个市辖区、10个县。市人民政府驻昭阳区崇义街。\"," +
            "\"sort\": 662.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 916," +
            "\"baseCode\": \"7015\"," +
            "\"keyName\": \"丽江市\"," +
            "\"keyShortName\": \"丽江\"," +
            "\"keyValue\": \"丽江\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个市辖区、2个县、2个自治县。市人民政府驻古城区玉雪大道。\"," +
            "\"sort\": 661.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 917," +
            "\"baseCode\": \"7016\"," +
            "\"keyName\": \"普洱市\"," +
            "\"keyShortName\": \"普洱\"," +
            "\"keyValue\": \"普洱\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个市辖区、9个自治县。市人民政府驻思茅区普洱大道。\"," +
            "\"sort\": 660.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 918," +
            "\"baseCode\": \"7017\"," +
            "\"keyName\": \"临沧市\"," +
            "\"keyShortName\": \"临沧\"," +
            "\"keyValue\": \"临沧\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个市辖区、4个县、3个自治县。市人民政府驻临翔区世纪路。\"," +
            "\"sort\": 659.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 919," +
            "\"baseCode\": \"7018\"," +
            "\"keyName\": \"文山壮族苗族自治州\"," +
            "\"keyShortName\": \"文山\"," +
            "\"keyValue\": \"文山\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个县级市、8个县。自治州人民政府驻文山市开化街道。\"," +
            "\"sort\": 658.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 920," +
            "\"baseCode\": \"7019\"," +
            "\"keyName\": \"红河哈尼族彝族自治州\"," +
            "\"keyShortName\": \"红河\"," +
            "\"keyValue\": \"红河自治州\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖4个县级市、6个县、3个自治县。自治州人民政府驻蒙自市天马路。\"," +
            "\"sort\": 657.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 921," +
            "\"baseCode\": \"7020\"," +
            "\"keyName\": \"西双版纳傣族自治州\"," +
            "\"keyShortName\": \"西双版纳\"," +
            "\"keyValue\": \"西双版纳\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个县级市、2个县。自治州人民政府驻景洪市宣慰大道。\"," +
            "\"sort\": 656.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 922," +
            "\"baseCode\": \"7021\"," +
            "\"keyName\": \"楚雄彝族自治州\"," +
            "\"keyShortName\": \"楚雄\"," +
            "\"keyValue\": \"楚雄\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个县级市、9个县。自治州人民政府驻楚雄市丰胜路。\"," +
            "\"sort\": 655.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 923," +
            "\"baseCode\": \"7022\"," +
            "\"keyName\": \"大理白族自治州\"," +
            "\"keyShortName\": \"大理\"," +
            "\"keyValue\": \"大理\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个县级市、8个县、3个自治县。自治州人民政府驻大理市宾川路。\"," +
            "\"sort\": 654.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 924," +
            "\"baseCode\": \"7023\"," +
            "\"keyName\": \"德宏傣族景颇族自治州\"," +
            "\"keyShortName\": \"德宏\"," +
            "\"keyValue\": \"德宏\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖2个县级市、3个县。自治州人民政府驻芒市勇罕街。\"," +
            "\"sort\": 653.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 925," +
            "\"baseCode\": \"7024\"," +
            "\"keyName\": \"怒江傈傈族自治州\"," +
            "\"keyShortName\": \"怒江\"," +
            "\"keyValue\": \"怒江\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖2个县、2个自治县。自治州人民政府驻泸水县人民路。\"," +
            "\"sort\": 652.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}, {" +
            "\"id\": 926," +
            "\"baseCode\": \"7025\"," +
            "\"keyName\": \"迪庆藏族自治州\"," +
            "\"keyShortName\": \"迪庆\"," +
            "\"keyValue\": \"迪庆\"," +
            "\"typeValue\": \"0\"," +
            "\"note\": \"辖1个县、1个自治县，代管1个县级市。自治州人民政府驻香格里拉市长征大道\"," +
            "\"sort\": 651.0000," +
            "\"isPublic\": true," +
            "\"parentId\": 518," +
            "\"level\": 3," +
            "\"allClassId\": \"0,517,518,\"," +
            "\"isLeaf\": false," +
            "\"isLock\": false," +
            "\"lockPass\": \"\"," +
            "\"loaded\": false," +
            "\"expanded\": true" +
            "}]," +
            "\"success\": true" +
            "}";
    String json4="{" +
            "\"code\": 0," +
            "\"msg\": \"\"," +
            "\"data\": []," +
            "\"success\": true" +
            "}";

    if(parentId==null||"0".equals(parentId))
    {
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().write(json1);
    }
    else if("517".equals(parentId))
    {
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().write(json2);
    }
    else if("518".equals(parentId))
    {
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().write(json3);
    }
    else
    {
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().write(json4);
    }

%>