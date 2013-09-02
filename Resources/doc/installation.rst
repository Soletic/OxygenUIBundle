Installation
============

Le bundles est actuellement dans une version beta (en cours de développement) et ne s'installe pas
en utilisant Composer pour le placer dans les vendor.

Vous pouvez

* Télécharger le code source au format ZIP : `Télécharger <https://github.com/Soletic/OxygenUIBundle/archive/master.zip>`_
* Utiliser un client Git pour cloner le dépôt dans votre application

Le code source doit-être placé dans : /path/to/application/src/Oxygen/UIBundle

Vous devez activer le bundle dans l'application :

.. code-block:: php

   <?php
   // app/AppKernel.php
   
   public function registerBundles()
   {
       $bundles = array(
           // ...
           new Oxygen\UIBundle\OxygenUIBundle(),
       );
   }


Les différents thèmes
---------------------

Formulaire
++++++++++

Pour afficher les formulaires dans un style pré-défini s'appuyant sur Bootstrap Twitter, vous devez ajouter
dans le fichier de configuration de l'application (config.yml) :

.. code-block:: yaml

   twig:
      form:
         resources:
            - 'OxygenUIBundle::forms.html.twig'


Cas d'une application hébergée sur GitHub
-----------------------------------------

Si votre application est hébergé sur GitHub (par exemple : https://github.com/lolozere/SSNPassApplication), 
nous vous conseillons d'utiliser la méthode Git et de faire du dépôt OxygenFramework un sous module Git de celui de votre application :

:doc:`../../cookbook/github/git-symfony2-submodules#ajouter-le-depot-comme-sous-module-du-depot-de-l-application`
