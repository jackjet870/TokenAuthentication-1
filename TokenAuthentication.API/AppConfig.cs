using System.Configuration;

namespace TokenAuthentication.API
{
    public class AppConfig
    {
        public static int AccessTokenExpireTimeSpanMinutes
        {
            get
            {
                int value;
                int.TryParse(ConfigurationManager.AppSettings["AccessTokenExpireTimeSpanMinutes"], out value);
                value = (value == 0) ? 30 : value;
                return value;
            }
        }
    }
}