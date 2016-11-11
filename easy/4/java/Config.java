import java.util.*;

public class Config {
    
    private String template;
    private Map<String, String> legend;

    public Config() {
        this.template = "sldlswswswsldls";
        this.legend = new HashMap<>();
        this.legend.put("s","!@$%^&*-_+=:|~?/.;");
        this.legend.put("d","0123456789");
        this.legend.put("w","sister offense temporary sock finish experience issue mouth position deck seminar begin live blonde impound foot ambiguity smile breed lung");
        this.legend.put("l","abcdefghijklmnoprstuvwxyz");
    }

    public String getTemplate() {
        return this.template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }

    public Map<String, String> getLegend() {
        return legend;
    }

    public void setLegend(Map<String, String> legend) {
        this.legend = legend;
    }
}