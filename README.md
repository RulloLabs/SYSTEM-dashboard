# RulloLabs OS - System Dashboard

## OBJETIVO
Gestionar TODOS mis proyectos como una infraestructura unificada accesible desde cualquier ordenador.

## REGLAS
1. TODO debe vivir en GitHub
2. 2. TODO debe poder ejecutarse sin entorno local
   3. 3. TODO debe tener deploy activo (Vercel)
      4. 4. NADA debe depender de una maquina especifica
        
         5. ## ESTRUCTURA
         6. - /CORE -> infra, configs globales
            - - /APPS -> proyectos activos
              - - /AI -> scripts IA
                - - /OLD -> proyectos antiguos
                 
                  - ## TAREAS AUTOMATICAS
                  - - Si creo proyecto -> crear repo + deploy + estructura
                    - - Si proyecto muere -> mover a /OLD
                      - - Si hay duplicados -> consolidar
                        - - Mantener README siempre actualizado
                          - - Generar dashboard global de proyectos
                           
                            - ## OUTPUT
                            - Sistema limpio, accesible, escalable desde cualquier dispositivo.
