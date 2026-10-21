import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Aniquilação</Text>

        <Text style={styles.subtitulo}>
          Alex Garland | ficção científica | 2018
        </Text>

        <View style={styles.borda}>
          <Text style={styles.sinopse}>
            {'Após o misterioso desaparecimento do marido, a bióloga Lena (Natalie Portman) aceita entrar em "The Shimmer", uma área isolada e em expansão, envolta por uma bolha prismática conhecida como Cintilante.\n\nO local foi selado pelo governo há três anos e é classificado como zona de desastre químico, mas nada ali se comporta de forma natural.\n\n' +
              "Dentro do Cintilante, as leis da biologia e da física se distorcem: animais híbridos, flores em padrões geométricos e mutações perturbadoras. A equipe de Lena enfrenta não apenas os perigos do ambiente, mas seus próprios demônios internos."}
          </Text>
        </View>

        <Text style={styles.fraseDestaque}>
          {'"Isso não é destruição. É mudança."'}
        </Text>

        <Text style={styles.creditos}>
          Recomendado por: Marcos Ilgner{"\n"} Nota: ★★★★★
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2538",
  },

  scroll: {
    padding: 28,
    paddingTop: 60,
    paddingBottom: 50,
  },

  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#9bca2e",
    letterSpacing: 8,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 12,
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 13,
    fontWeight: "normal",
    color: "#8a94a6",
    textTransform: "capitalize",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 20,
  },

  borda: {
    borderWidth: 2,
    borderColor: "#657e2b",
    padding: 18,
    marginBottom: 20,
  },

  sinopse: {
    fontSize: 16,
    color: "#cfddee",
    lineHeight: 25,
    textAlign: "justify",
  },

  fraseDestaque: {
    color: "#ffd966",
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    letterSpacing: 0.5,
  },

  creditos: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#afb0b3",
    textAlign: "right",
    lineHeight: 22,
    marginTop: 10,
  },
});
