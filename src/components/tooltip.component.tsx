import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

function ToolTipComponent() {
  return (
    <Tooltip
      title={
        <>
          <Typography color="inherit">Tilgungsplan Berechnung</Typography>
          <p>
            <p>
              Diese Anwendung ermöglicht es Ihnen, einen Tilgungsplan für Ihr
              Darlehen zu berechnen. Der Tilgungsplan zeigt, wie Ihr Darlehen
              über die Zeit zurückgezahlt wird, und bietet eine detaillierte
              Aufschlüsselung der jährlichen Zahlungen.
            </p>
            <p>Sie müssen die folgenden Informationen bereitstellen:</p>
            <ul>
              <li>
                <strong>Darlehensbetrag:</strong> Dies ist der Gesamtbetrag, den
                Sie geliehen haben. Zum Beispiel, wenn Sie ein Darlehen von
                250.000 € aufgenommen haben, geben Sie "250000" ein.
              </li>
              <li>
                <strong>Sollzinssatz:</strong> Dies ist der Zinssatz Ihres
                Darlehens. Geben Sie diesen Wert als eine Zahl an, die ein
                Prozent darstellt. Zum Beispiel, wenn Ihr Zinssatz 2% beträgt,
                geben Sie "2" ein.
              </li>
              <li>
                <strong>Tilgungssatz:</strong> Dies ist der Prozentsatz des
                Darlehensbetrags, den Sie jedes Jahr zurückzahlen. Zum Beispiel,
                wenn Ihr Tilgungssatz 3% beträgt, geben Sie "3" ein.
              </li>
              <li>
                <strong>Zinsbindungsdauer:</strong> Dies ist die Anzahl der
                Jahre, in denen Ihr Zinssatz fest bleibt. Sie können jeden Wert
                zwischen 1 und 30 Jahren auswählen.
              </li>
            </ul>
            <p>
              Nach der Eingabe dieser Informationen klicken Sie auf "Berechnen",
              um Ihren Tilgungsplan zu sehen. Die Übersicht zeigt die
              monatlichen Zahlungen, die Sie für das Darlehen leisten müssen,
              sowie die verbleibende Schuld am Ende der Zinsbindung.
            </p>
          </p>
        </>
      }
      placement="right"
    >
      <IconButton color="primary">
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ToolTipComponent;
